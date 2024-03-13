import React from 'react'
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth.context.jsx";
import { Button, Container, Form, Row, Col } from "react-bootstrap"
import authServices from '../../../services/auth.services.js';
import "./LoginForm.css"

import Fly from "./../../../images/fly-together.png"

function LoginForm() {

    const [loginData, setLogin] = useState({
        email: "",
        password: ""
    })


    const { storeToken, authenticateUser } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setLogin((prevLogin) => ({
            ...prevLogin, [name]: value
        }))
    }

    const handleLoginSubmit = (e) => {

        e.preventDefault();

        const { email, password } = loginData
        const reqBody = { email, password }

        authServices
            .loginUser(reqBody)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/')
            })
            .catch((error) => {
                setErrorMessage("It seems there is an error in your request, try again.");
            })
    }


    return (
        <div className="LoginForm">
        <div>
                <img src={Fly} alt="Plane" className="image" />
        </div>
        <div>
        <Container>
        <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleInputChange} />
                <Button type="submit">Login</Button>
            </Form.Group>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </Form>
                <Row>
                <Col>
                    <p>
                        Don't have an account yet? No worries, 
                        <Link to={"/signup"}className="Link"> sign up here!</Link>
                    </p>
                </Col>
            </Row>
            </Container>
        </div>
        </div>
    )
}

export default LoginForm