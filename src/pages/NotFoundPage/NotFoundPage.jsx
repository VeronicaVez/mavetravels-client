import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./NotFoundPage.css"

const NotFoundPage = () => {

    return (
        <Container className="NotFoundPage">
            <Row>
                <Col>
                    <h1>Don't know where you are?</h1>
                    <h2>We really have no idea either...</h2>
                    <Link to="/"><Button>BACK TO HOME PAGE</Button></Link>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFoundPage