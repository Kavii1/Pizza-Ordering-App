import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const PostData = (e) => {
    e.preventDefault()
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    }).then(res => res.json())
    .then(data => {
      if(data.error){
        const notify = () => {
          toast.error(data.error, {
            autoClose: 2000,
            theme: 'colored'
          })
        }
        notify()
      }
      else{
        const notify = () => {
          toast.success(data.message, {
            autoClose: 2000
          })
        }
        notify()
        setTimeout(() => {
          navigate("/signin")
        }, 2000);
      }
    }).catch(err =>  console.log(err))
  }

  return (
    <div className='signup-pizza-bg'>
      <div className="container">
      <div className="login-block">
      <ToastContainer />
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
