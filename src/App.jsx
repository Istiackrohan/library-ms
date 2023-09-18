/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import './App.css'
import Home from './routes/Home';
import { Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Library App</h1>
        <Link to={`home`}>Go to home</Link><br/>
        <Link to={`login`}>Login</Link><br/>
        <Link to={`register`}>Register</Link>
      </div>
    </>
  )
}

export default App
