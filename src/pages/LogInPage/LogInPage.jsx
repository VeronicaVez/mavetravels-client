import React from "react"
import LogInForm from "./../../components/Forms/LoginForm/LogInForm"
import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"

import './LogInPage.css'

const LogInPage = () => {
    return (
        <Container className="LoginPage">
            <Row>
                <Col>
                    <h1>LogIn</h1>
                </Col>
                <Col>
                    <Link to={"/signup/admin"}>
                        <Button>ADMIN</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <LogInForm />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        Don't have an account yet?
                        <Link to={"/signup"}>Sign Up</Link>
                    </p>
                </Col>
            </Row>
        </Container >
    )
}

export default LogInPage