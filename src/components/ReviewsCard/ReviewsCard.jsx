import React from "react"
import axios from "axios"
import { Card, CloseButton } from 'react-bootstrap'

const API_BASE_URL = "http://localhost:5005"

function ReviewsCard({ id, userId, title, description, rating, source, travelId, reviews, setReviews }) {

      const deleteCard = (reviewId) => {
        axios
            .delete(`${API_BASE_URL}/api/reviews/${reviewId}`)
            .then(() => {
                const filteredReviews = reviews.filter(elm => elm.id !== reviewId);
                setReviews(filteredReviews)
            })
            .catch(err => console.log(err))
    }
    
  return (
    <div className="ReviewsCard">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="left" src={source} />
      <CloseButton className="btn-close" onClick={() => { deleteCard(id) }} />
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