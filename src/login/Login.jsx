import React, { useState } from 'react'
import './login.css'
import loginBg from '../images/login-bg.jpg'
import { userData, useUserContext } from '../context/UserContext'

const Login = () => {
  const { handleSetUser } = useUserContext()
  const [error, setError] = useState(null)
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formDataObj = {}
    formData.forEach((value, key) => {
      formDataObj[key] = value
    })
    if (formDataObj.userName === userData.userName && formDataObj.password === userData.password) {
      handleSetUser(formDataObj)
      setError(null)
    } else {
      setError({ error: 'Invalid username or password' })
    }
    // console.log('e', formDataObj)
  }
  return (
    <div className='login-container'>
      <div className='left-panel'>
        {/* Replace with an actual image or illustration */}
        <img src={loginBg} alt='Illustration' />
      </div>
      <div className='right-panel'>
        {error && <div className='error-message'>{error?.error}</div>}
        <h1>
          Hello,
          <br />
          Welcome back
        </h1>
        <form className='login-form' onSubmit={handleOnSubmit}>
          <input type='text' name='userName' placeholder='Username or email' />
          <input type='password' name='password' placeholder='Password' />
          <div className='form-options'>
            <label>
              <input type='checkbox' />
              Remember me
            </label>
            <a href='#'>Forgot password?</a>
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
