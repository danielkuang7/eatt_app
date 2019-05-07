import React from 'react';
import { withRouter } from 'react-router-dom';

function EditRestaurant(props) {
  return (
    <div>
      <h3>Add comments:</h3>
      <form onSubmit={props.handleSubmit}>

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

        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(EditRestaurant);