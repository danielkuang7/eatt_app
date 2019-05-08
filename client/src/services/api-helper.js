const baseUrl = 'http://localhost:3000'

export const loginUser = (loginData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseUrl}/auth/login`, opts)
    .then(resp => resp.json())
}

export const registerUser = (registerData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ user: registerData }),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseUrl}/users/`, opts)
    .then(resp => resp.json())
}

const createRestaurant = (data) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ restaurant: data }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/restaurants`, opts)
    .then(resp => resp.json())
}

const readAllRestaurants = () => {
  return fetch(`${baseUrl}/restaurants`)
    .then(resp => resp.json())
}

const updateRestaurant = (id, data) => {
  const opts = {
    method: 'PUT',
    body: JSON.stringify({ restaurant: data }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/restaurants/${id}`, opts)
    .then(resp => resp.json())
}

const destroyRestaurant = (id) => {
  const opts = {
    method: 'DELETE'
  }
  return fetch(`${baseUrl}/restaurants/${id}`, opts)
}

export {
  createRestaurant,
  readAllRestaurants,
  updateRestaurant,
  destroyRestaurant
}