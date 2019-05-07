import React, { Component } from 'react';
import EditRestaurant from './EditRestaurant'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class RestaurantsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }

  componentDidMount() {
    this.props.mountEditForm(this.props.id);
  }

  render() {
    const { restaurant } = this.props;
    return (
      <div className="restaurant-page">
        {restaurant === undefined ? <h2>Loading . . .</h2> : (
          <div>
            <img alt={restaurant.name} src={restaurant.photo} />
            {this.state.isEdit ?
              <Route path={'/restaurants/:id/edit'} render={() => (
                <EditRestaurant
                  handleFormChange={this.props.handleFormChange}
                  handleSubmit={(e) => {
                    e.preventDefault();
                    this.props.editRestaurant();
                    this.setState({ isEdit: false })
                    this.props.history.push(`/restaurants/${this.props.restaurantForm.id}`)
                  }}
                  restaurantForm={this.props.restaurantForm} />
              )} />
              :
              <>
                <h1>{restaurant.name}</h1>
                Customer comment: 
                <li>"{restaurant.comment}"</li>
                <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/restaurants/${restaurant.id}/edit`)
                }}>Update</button>
                <button onClick={() => {
                  this.props.deleteRestaurant(restaurant.id);
                  this.props.history.push('/')
                }}>Delete</button>
              </>
            }
          </div>)}
      </div>)
  }
}

export default withRouter(RestaurantsView);