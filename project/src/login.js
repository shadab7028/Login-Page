import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div className='container'>
            <div className='card'>
                <div className='form'>
                <h1>Login</h1>
                <input type='text' placeholder='Enter Your Name' className='input'  />
                <input type='password' placeholder='Enter Your Password' className='input' />

<Link to={'/home'}>
<button className='btn' >Submits</button>
</Link>                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login