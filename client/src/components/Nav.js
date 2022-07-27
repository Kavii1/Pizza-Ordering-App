import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import img from "../logo.svg"
import { UserContext } from '../App';
import { Navbar } from 'react-bootstrap'

const Nav = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(UserContext)

  const renderNav = () => {
    if (state) {
      return [
        <Link key={0} to="/">Home</Link>,
        <Link key={1} to="/cart">Cart</Link>,
        <Link key={2} to="/orders">Orders</Link>,
        <button key={3} onClick={() => {
          localStorage.clear()
          dispatch({ type: "CLEAR" })
          navigate('/signin')
        }}>Logout</button>
      ]
    }
    else {
      return [
        <Link key={4} to="/signin">Signin</Link>,
        <Link key={5} to="/signup">Signup</Link>
      ]
    }
  }

  return (
    <Navbar bg="dark" expand="md">
      <Navbar.Brand><Link to={state ? "/" : "/signup"} className='logo'><img src={img} alt="Pizza" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
            {renderNav()}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav
