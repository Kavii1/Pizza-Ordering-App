import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div  className="nav-wrapper">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/signin">Signin</Link>
      <Link to="/signup">Singup</Link>
      </div>
    </nav>
  )
}

export default Navbar
