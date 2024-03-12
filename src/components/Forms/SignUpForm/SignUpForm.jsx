import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Button, Form, Container } from "react-bootstrap"
import authServices from "../../../services/auth.services"
import "./SignUpForm.css"

import Fly from "./../../../images/fly-together.png"

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

    authServices
      .signupUser(requestBody)
      .then(() => {
        navigate('/login')
      })
      .catch((error) => {
        setErrorMessage("It seems there is an error in your request, try again.")
      })
  }

  return (
    <div className="SignUpForm">
      <div>
          <img src={Fly} alt="Plane" className="image" />
        </div>
        <div>
      <Container>
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
        </Container>
      </div>
      </div>
  )
}

export default SignupForm
