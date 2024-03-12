import React from "react"
import "./ReviewsPage.css"

import { Container } from "react-bootstrap"
import ReviewsList from "../../components/ReviewsList/ReviewsList"

const ReviewsPage = () => {

    return (
        <div className="ReviewsPage">
            <Container>
                <h1>Your Experiences</h1>
                <ReviewsList />
            </Container>
        </div>
    )
}

export default ReviewsPage