import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const PostData = (e) => {
    e.preventDefault()
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: '',
        email: '',
        password: ''
      })
    }).then(res => res.json)
    .then(data => {
      console.log(data);
    })
  }

  return (
    <div className='signup-pizza-bg'>
      <div className="container">
      <div className="login-block">
        <h2>Chit Chat</h2>
        <form action="" className="login-form common-form">
          <input type="text" placeholder='Name' autoComplete='false' value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="text" placeholder='Email' autoComplete='false' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder='Password' autoComplete='false' value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button onClick={(e)=>PostData(e)}>Signup</button>
        </form>
        <div className="extra-info">
          <Link to="/signin">Already have an account <b>Signin</b></Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Signup
