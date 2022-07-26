import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"

const Signin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const PostData = () => {
    
  }

  return (
    <div className='signin-pizza-bg'>
      <Container>
      <div className="login-block">
        <h2>Login</h2>
        <form className="login-form common-form" onSubmit={(e)=>PostData(e)}>
          <input type="text" placeholder='Email' autoComplete='false' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' autoComplete='false' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Signin</button>
        </form>
        <div className="extra-info">
          <Link to="/signup">Don't have an account <b>Create One</b></Link>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Signin
