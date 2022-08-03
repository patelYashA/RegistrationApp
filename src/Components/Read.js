import { React, useEffect, useState } from 'react'
import "./App.css"
import axios from "axios"
import { Link } from "react-router-dom"

const Read = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/users/`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])

  const onDelete = (id) => {
    axios.delete(`http://localhost:5000/users/` + id)
    window.location = "/";
  }

  return (
    <div className='App'>
      <table className="table table-striped">
        <thead className='table-dark'>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data) => {
            return (
              <tr key={data._id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td> <Link to={`/edit/${data._id}`}><i class="bi bi-pencil-fill"></i></Link> | <Link to={`/`} onClick={() => onDelete(data._id)}><i class="bi bi-trash3-fill"></i></Link></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Read