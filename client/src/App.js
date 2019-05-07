import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';

import Logo from './components/Logo';
import RestaurantsView from './components/RestaurantsView';
import RestaurantPage from './components/RestaurantPage';
import CreateRestaurant from './components/CreateRestaurant'
import Login from './components/Login'
import Register from './components/Register'

import {
  createRestaurant,
  readAllRestaurants,
  updateRestaurant,
  destroyRestaurant,
  loginUser,
  registerUser
} from './services/api-helper'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      restaurantForm: {
        name: "",
        photo: "",
        comment: ""
      },
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    };
    this.handleFormChange = this.handleFormChange.bind(this)
    this.mountEditForm = this.mountEditForm.bind(this)
    this.editRestaurant = this.editRestaurant.bind(this)
    this.deleteRestaurant = this.deleteRestaurant.bind(this)
    this.newRestaurant = this.newRestaurant.bind(this)
    this.handleLoginButton = this.handleLoginButton.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.authHandleChange = this.authHandleChange.bind(this)
  }

  componentDidMount() {
    this.getRestaurants();
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState({
        currentUser: user
      })
    }
  }

  async getRestaurants() {
    const restaurants = await readAllRestaurants();
    this.setState({
      restaurants
    })
  }

  async newRestaurant(e) {
    e.preventDefault();
    const restaurant = await createRestaurant(this.state.restaurantForm);
    this.setState(prevState => ({
      restaurants: [...prevState.restaurants, restaurant],
      restaurantForm: {
        name: "",
        photo: "",
        comment: ""
      }
    }))
  }

  async editRestaurant() {
    const { restaurantForm } = this.state
    await updateRestaurant(restaurantForm.id, restaurantForm);
    this.setState(prevState => (
      {
        restaurants: prevState.restaurants.map(restaurant => restaurant.id === restaurantForm.id ? restaurantForm : restaurant),
      }
    ))
  }

  async deleteRestaurant(id) {
    await destroyRestaurant(id);
    this.setState(prevState => ({
      restaurants: prevState.restaurants.filter(restaurant => restaurant.id !== id)
    }))
  }

  handleFormChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      restaurantForm: {
        ...prevState.restaurantForm,
        [name]: value
      }
    }))
  }

  async mountEditForm(id) {
    const restaurants = await readAllRestaurants();
    const restaurant = restaurants.find(el => el.id === parseInt(id));
    this.setState({
      restaurantForm: restaurant
    });
  }


  handleLoginButton() {
    this.props.history.push("/login")
  }

  async handleLogin() {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token)
  }

  async handleRegister(e) {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
  }

  handleLogout() {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div className="App">
       <header>
          <h1><Link to='/'>EATT</Link></h1>

          <div className="nav"><Link to='/'>Home</Link>

          <Link to='/monthly' onClick={() => this.setState({
            restaurantForm: {
              name: "",
              photo: ""
            }
          })}>Hottest</Link>

          <Link to='/new/restaurant' onClick={() => this.setState({
            restaurantForm: {
              name: "",
              photo: ""
            }
          })}>Create</Link>
          
          
          </div>

          
          
          {this.state.currentUser
            ?
            <>
              <p>Logged in successfully!</p>
              <button className="logout" onClick={this.handleLogout}>Logout</button>
            </>
            :
            <button onClick={this.handleLoginButton}>Login/Register</button>
          }
          
          </header>


          

        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />

        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />

        <Route
          exact path="/monthly"
          render={() => (
            <RestaurantsView
              restaurants={this.state.restaurants}
              restaurantForm={this.state.restaurantForm}
              handleFormChange={this.handleFormChange}
              newRestaurant={this.newRestaurant} />
          )}
        />

        <Route
          path="/new/restaurant"
          render={() => (
            <CreateRestaurant
              handleFormChange={this.handleFormChange}
              restaurantForm={this.state.restaurantForm}
              newRestaurant={this.newRestaurant} />
          )} />

        <Route
          path="/restaurants/:id"
          render={(props) => {
            const { id } = props.match.params;
            const restaurant = this.state.restaurants.find(el => el.id === parseInt(id));
            return <RestaurantPage
              id={id}
              restaurant={restaurant}
              handleFormChange={this.handleFormChange}
              mountEditForm={this.mountEditForm}
              editRestaurant={this.editRestaurant}
              restaurantForm={this.state.restaurantForm}
              deleteRestaurant={this.deleteRestaurant} />
          }}
        />

        <footer className="footer-dk">©DK Development</footer>
      </div>
    );
  }
}

export default withRouter(App);
