import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/auth.context.jsx'
import { Button, Form } from 'react-bootstrap'

const API_URL = "http://localhost:5005"

function AdminLoginForm() {

    const [loginData, setLogin] = useState({
        email: '',
        password: '',
        role: ''
    })

    const { storeToken, authenticateUser } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState(undefined)
    const navigate = useNavigate()

    const handleInputChange = (e) => {

        const { value, name } = e.target

        setLogin((prevLogin) => ({
            ...prevLogin,
            [name]: value
        }))
    }

    const handleLoginSubmit = (e) => {

        e.preventDefault()

        const { email, password } = loginData
        const reqBody = { email, password }

        axios
            .post(`${API_URL}/api/auth/login`, reqBody)
            .then(({ data }) => {
                if (data.role === "admin") {
                    storeToken(data.authToken)
                    authenticateUser()
                    navigate('/')
                } else {
                    setErrorMessage('You are not authorized to access this page.')
                }
            })
            .catch((error) => {
                setErrorMessage('It seems there is an error in your request, try again.')
            })
    }

    return (

        <Form onSubmit={handleLoginSubmit}>

            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleInputChange}
                />

                <Button type="submit">Login</Button>

            </Form.Group>

            {
                errorMessage
                &&
                <p className="error-message">
                    {errorMessage}
                </p>
            }
        </Form>
    )
}

export default AdminLoginForm
