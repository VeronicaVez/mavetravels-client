import React from "react"
import LogInForm from "./../../components/Forms/LoginForm/LogInForm"
import { Container, Row, Col, Button } from "react-bootstrap"

import './LogInPage.css'

const LogInPage = () => {
    return (
        <div className="LoginPage">
        <Container className="LoginPage">
            <Row>
                <Col className="title">
                        <h1>Welcome back, log in here and let's fly together!</h1>
                </Col>
                </Row>
            <Row>
                <Col>
                    <LogInForm />
                </Col>
            </Row>
            </Container >
        </div>
    )
}

export default LogInPage