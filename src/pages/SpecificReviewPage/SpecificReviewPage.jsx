import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Container, Card, Row, Col, Button } from "react-bootstrap"

import reviewsServices from "../../services/reviews.services"


const SpecificReviewPage = ({ _id}) => {

    const [review, setReview] = useState({})

    const { reviewId } = useParams()

    useEffect(() => {
        getReview()
        }, [reviewId])

    const getReview = () => {
        reviewsServices
            .getReview(reviewId)
            .then(({ data }) => setReview(data))
            .catch(err => console.error(err))
    }

    return (
        <Container className="SpecificReviewPage">
            <h1> {review.title}</h1>
            <h2>{review.user} - {review.travel}</h2>
            <Row>
                <Col>
                    <Card>
                        <img src={review.source} alt="user-photos"/>
                        <Card.Body>Description: {review.description} </Card.Body>
                        <Link className="LinkStyle" to={`/reviews/edit/${reviewId}`}><Button>Edit your experience</Button></Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SpecificReviewPage