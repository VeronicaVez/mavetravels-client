import React, { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"
import ReviewsCard from "./../ReviewsCard/ReviewsCard"
import reviewsServices from "../../services/reviews.services"
import { useNavigate } from "react-router-dom"

const ReviewsList = () => {

    const [reviews, setReviews] = useState([])

    const navigate = useState()

    useEffect(() => getAllReviews(), [])



    const getAllReviews = () => {
        reviewsServices
            .getAllReviews()
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
                        <Col key={review.id} md={4}>
                            <ReviewsCard {...review} deleteReview={deleteReview} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default ReviewsList