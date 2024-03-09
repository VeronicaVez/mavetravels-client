import React, { useEffect } from "react"
import { Card, CloseButton } from 'react-bootstrap'
import reviewsServices from "../../services/reviews.services"


function ReviewsCard({ id, userId, title, description, rating, source, travelId, reviews, setReviews }) {

      useEffect(() => deleteReview(), [])

      const deleteReview = (id) => {
        reviewsServices
            .deleteReview()
            .then(() => {
                const filteredReviews = reviews.filter(elm => elm.id !== id);
                setReviews(filteredReviews)
            })
            .catch(err => console.log(err))
    }
    
  return (
    <div className="ReviewsCard">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="left" src={source} />
      <CloseButton className="btn-close" onClick={() => { deleteReview(id) }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{userId} - {travelId}</Card.Subtitle>  
            <Card.Text>
            {rating}
            {description}
        </Card.Text>
      </Card.Body>
      </Card>
      </div>
  )
}

export default ReviewsCard