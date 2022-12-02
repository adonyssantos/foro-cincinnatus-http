const USERS_URL = 'http://localhost:8080/users';

// GET ALL USERS
fetch(USERS_URL)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// GET USER BY ID
fetch(`${USERS_URL}/1`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// CREATE A NEW USER
const newUser = {
  name: 'John',
  age: 25,
};

const jsonUser = JSON.stringify(newUser);

fetch(USERS_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: jsonUser,
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
