import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Button, Form } from "react-bootstrap"

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
    const { value, name } = e.target
    setSignUp((prevSignUp) => ({
      ...prevSignUp, [name]: value
    }))
  }

  const handleSignupSubmit = (e) => {

    e.preventDefault()

    const { email, password, username } = signUp
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
            <Form onSubmit={handleSignupSubmit}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleInputChangeSubmit} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleInputChangeSubmit} />
                      <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="username"
                    placeholder="Enter Username"
                    name="username"
                    onChange={handleInputChangeSubmit} />
            </Form.Group>
                <Button type="submit">Login</Button>
            </Form.Group>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </Form>
  )
}

export default SignupForm
