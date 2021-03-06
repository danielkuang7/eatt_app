import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateRestaurant(props) {
  return (
    <div className="create-restaurant" >
      <h3>Add info to create a new restaurant</h3>
      <form onSubmit={props.newRestaurant}>
        <p>Photo Link:</p>
        <input
          type="text"
          name="photo"
          value={props.restaurantForm.photo}
          onChange={props.handleFormChange} />
          
        <p>Restaurant's name:</p>
        <input
          type="text"
          name="name"
          value={props.restaurantForm.name}
          onChange={props.handleFormChange} />

          <p>Comment:</p>
        <input
          type="text"
          name="comment"
          value={props.restaurantForm.comment}
          onChange={props.handleFormChange} />
        <div><button>Submit</button></div>
      </form>
    </div >
  )
}

export default withRouter(CreateRestaurant);