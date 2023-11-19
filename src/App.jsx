/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  // const handleAddUser = event => {
  //   // event.preventdefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   console.log(name, email);
  // }

  return (
    <>
      <div>
        <h1>Library App</h1>
        <Link to={`home`}>Go to home</Link><br/>
        <Link to={`login`}>Login</Link><br/>
        <Link to={`register`}>Register</Link>
      </div>
      <div className="">
        <form>
          <input type="text" name="name" id="" /> <br />
          <input type="email" name="email" id="" /> <br />
          <input type="submit" value="Add User" /> <br />
        </form>
      </div>
      <div className="">
        <h2>User Management System</h2>
        <h3>Numbers of users: {users.length}</h3>
        {users.map(users => <p key={users.id}>{users.id}, {users.name}, {users.email}</p>)}
      </div>
    </>
  )
}

export default App
