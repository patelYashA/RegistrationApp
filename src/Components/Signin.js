import React, { useState } from 'react'
import "./App.css"
import axios from 'axios';

const Signin = () => {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUser(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:5000/users/add', user)
    console.log(user);
    setUser("");

    window.location = "/";
  }

  return (
    <div className='App'>
      <h2>Register</h2>
      <form>
        <div>
          <label>Full Name:</label>
          <br />
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <br />
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </div>
        <br />
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signin