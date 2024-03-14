import React, { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"
import ReviewsCard from "./../ReviewsCard/ReviewsCard"
import reviewsServices from "../../services/reviews.services"
import travelsServices from "./../../services/travels.services"

const ReviewsList = ({ travelId }) => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        if (travelId) {
            getReviewsByTravelId(travelId)
        } else {
            getAllReviews()}
        }, [travelId])

    const getAllReviews = () => {
        reviewsServices
            .getAllReviews()
            .then(({ data }) => setReviews(data))
            .catch(err => console.log(err))
    }

    const getReviewsByTravelId = (travelId) => {
        reviewsServices
            .getReviewsByTravelId(travelId)
            .then(({ data }) => setReviews(data))
            .catch(err => console.log(err))
    }

    const deleteReview = (id) => {
        reviewsServices
            .deleteReview(id)
            .then(() => navigate(location.reload()))
            .catch(err => console.log(err))
    }

    return (
        <div className="ReviewsList">
            <Row>
                {
                    reviews.map((review) => (
                        <Col key={review.id} lg={3} md={6}>
                            <ReviewsCard {...review} deleteReview={deleteReview} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default ReviewsList