import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/profile">Profile</Link></p>
      
    </div>
  )
}

export default Navbar