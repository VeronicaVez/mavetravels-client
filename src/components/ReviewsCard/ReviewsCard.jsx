import React, { useEffect, useState } from "react"
import { Card, CloseButton } from 'react-bootstrap'
import reviewsServices from "../../services/reviews.services"
import { Link } from "react-router-dom"
import "./../../components/ReviewsCard/ReviewsCard.css"
import { FaStar } from "react-icons/fa"


function ReviewsCard({ id, user, title, description, rating, source, travel, reviews, setReviews, deleteReview}) {
    
  const [displayRating, setDisplayRating] = useState(rating);

  useEffect(() => {
    setDisplayRating(rating);
  }, [rating])

    const [hover, setHover] = useState()

  return (
    <article className="ReviewsCard">
    <Card>
      <Card.Img src={source} />
      <CloseButton className="btn-close" onClick={() => { deleteReview(id) }} />
        <Card.Body>
          <Card.Text>
             {[...Array(rating)].map((star, index) => {
                const currentRating = index + 1
                return (
                    <label>
                    <input
                            type='radio'
                    />
                        <FaStar
                            size={25}
                            color={currentRating <= (hover || rating) ? "#F5DD61" : "#F2F597"}
                            />
                        </label>
                )
            })}
          </Card.Text>
        <Link className="LinkStyle" to={`/reviews/${id}`}><Card.Title>{title}</Card.Title></Link>
          <Card.Subtitle>{user} - {travel}</Card.Subtitle>  
            <Card.Text>
            {description}
        </Card.Text>
      </Card.Body>
      </Card>
      </article>
  )
}

export default ReviewsCard