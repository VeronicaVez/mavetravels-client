import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"
import AdminLogInForm from "../../components/AdminLogInForm/AdminLogInForm"

const AdminLogInPage = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Admin LogIn</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AdminLogInForm />
                </Col>
            </Row>

        </Container>
    )
}

export default AdminLogInPage