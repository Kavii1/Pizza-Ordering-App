import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Container } from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../App';

const Signin = () => {
  const {state, dispatch} = useContext(UserContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const PostData = (e) => {
    e.preventDefault()
    // if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
    //   const notify = () => {
    //     toast.error("Invalid Email", {
    //       autoClose: 2000,
    //       theme: 'colored'
    //     })
    //   }
    //   notify()
    //   return
    // }
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
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
          toast.success("Successfully Signed In", {
            autoClose: 1000,
            theme: 'colored'
          })
        }
        notify()
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("user",JSON.stringify(data.user))
        dispatch({type:"USER", payload: data.user})
        setTimeout(() => {
          navigate("/")
        }, 1200);
      }
    }).catch(err =>  console.log(err))
  }

  return (
    <div className='signin-pizza-bg'>
      <Container>
      <div className="login-block">
      <ToastContainer />
        <h2>Login</h2>
        <form action="" className="login-form common-form">
          <input type="text" placeholder='Email' autoComplete='false' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' autoComplete='false' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' onClick={(e)=>PostData(e)}>Signin</button>
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
