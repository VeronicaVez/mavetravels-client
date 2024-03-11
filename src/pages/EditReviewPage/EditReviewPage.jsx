import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import EditReviewForm from "./../../components/EditReviewForm/EditReviewForm"

const EditReviewPage = () => {

        return (
        <Container className="EditReviewPage">
            <h1>Edit your experience</h1>
            <Row>
                <Col>
                <EditReviewForm/>
                </Col>
            </Row>
        </Container>
    )
}

export default EditReviewPage