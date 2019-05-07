import React from 'react';
import { withRouter } from 'react-router';

function RestaurantsView(props) {
  return (
    <div className="restaurant-container">
    <tag>OUR HOTTEST EATT OF THE MONTH</tag>
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
      </div>
    </div>
  )
}

export default withRouter(RestaurantsView)