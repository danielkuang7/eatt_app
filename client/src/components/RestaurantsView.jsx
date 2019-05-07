import React from 'react';
import { withRouter } from 'react-router';

function RestaurantsView(props) {
  return (
    <div className="restaurant-container">
    <p>OUR HOTTEST EATT OF THE MONTH</p>
      {props.restaurants.map(restaurant => (
        <div
          key={restaurant.id}
          className="restaurant-info"
          onClick={(e) => {
            debugger;
            props.history.push(`/restaurants/${restaurant.id}`);
            window.scrollTo(0, 0);
          }}>
          <img alt={restaurant.name} src={restaurant.photo} />
          <h3>
           <p>{restaurant.name}</p>
          </h3>
        </div>
      ))}
      <div
        className="restaurant-info"
        onClick={() => {
          props.history.push('/new/restaurant');
          window.scrollTo(0, 0);
        }}>
        <img
          alt="Create a new restaurant"
          src="https://cdn3.iconfinder.com/data/icons/buttons/512/Icon_11-512.png"
          className="plus-sign" />
        <h4>Create a new restaurant</h4>
      </div>
    </div>
  )
}

export default withRouter(RestaurantsView)