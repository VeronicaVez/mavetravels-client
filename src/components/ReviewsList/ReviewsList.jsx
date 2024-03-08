import axios from "axios"
import React, { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"
import ReviewsCard from "./../ReviewsCard/ReviewsCard"

const API_BASE_URL = "http://localhost:5005"

const ReviewsList = () => {
    
    const [reviews, setReviews] = useState([])

    useEffect(() => loadReviews(), [])
    
    const loadReviews = () => {
        axios
            .get(`${API_BASE_URL}/api/reviews`)
            .then(({ data }) => setReviews(data))
            .catch(err => console.log(err))
    }
    return (
        <div className="ReviewsList">
                <Row>
                    {
                    reviews.map((review)=>(
                        <Col key={review.id} md={4}>
                        <ReviewsCard {...review} />
                        </Col>
                        ))
                    }
                </Row>
        </div>
    )
}

export default ReviewsList