import { React, useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import "./App.css"
import axios from "axios"

const Edit = () => {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/users/` + id)
      .then((res) => {
        setUser({
          name: res.data.name,
          email: res.data.email
        })
      }).catch((err) => console.log(err));
  }, [id])

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
    axios.patch(`http://localhost:5000/users/update/` + id, user)
    window.location = "/";
  }

  return (
    <div className='App'>
      <h2>Edit</h2>
      <form>
        <div>
          <label>Full Name:</label>
          <br />
          <input type="text" name='name' value={user.name} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <br />
          <input type="email" name='email' value={user.email} onChange={handleChange} />
        </div>
        <br />
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Edit