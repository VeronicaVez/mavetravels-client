import React from "react"
import SignUpForm from "../../components/Forms/SignUpForm/SignUpForm"
import { Container, Row, Col, Button } from "react-bootstrap"
import "./SignUpPage.css"

const SignUpPage = () => {
    return (
        <div className="SignupPage">
                    <Container className="SignUpPage">
            <Row>
                <Col className="title">
                        <h1>Sign up and explore wonderful destinations!</h1>
                </Col>
                </Row>
            <Row>
                <Col>
                    <SignUpForm />
                </Col>
            </Row>
            </Container >
        </div >
    )
}

export default SignUpPage