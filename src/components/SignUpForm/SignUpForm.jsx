import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const API_BASE_URL = "http://localhost:5005"


function SignupForm() {

  const [signUp, setSignUp] = useState({
        email: "",
        password: "",
        username: ""
  })

  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()
  
  const handleInputChangeSubmit = (e) => {
    const{value, name} = e.target
    setSignUp((prevSignUp)=>({
        ...prevSignUp, [name]:value
    }))
  }

  const handleSignupSubmit = (e) => {

    e.preventDefault()

    const {email, password, username} = signUp
    const requestBody = { email, password, username }
 
    axios
    .post(`${API_BASE_URL}/api/auth/signup`, requestBody)
      .then(() => {
        navigate('/login')
      })
      .catch((error) => {
        setErrorMessage("It seems there is an error in your request, try again.")
      })
  }
  
  return (
    <div className="SignupForm">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          onChange={handleInputChangeSubmit}
        />

        <label>Password:</label>
        <input 
          type="password"
          name="password"
          onChange={handleInputChangeSubmit}
        />

        <label>Username:</label>
        <input 
          type="text"
          name="username"
          onChange={handleInputChangeSubmit}
        />

        <button type="submit">Sign Up</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }
    </div>
  )
}

export default SignupForm
