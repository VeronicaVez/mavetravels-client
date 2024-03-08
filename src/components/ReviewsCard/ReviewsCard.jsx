import React from "react"

import Card from 'react-bootstrap/Card'

function ReviewsCard({ user, title, description, rating, source, travel }) {
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="left" src={source} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
              <Card.Subtitle>{user.name} - {travel.name}</Card.Subtitle>
            <Card.Text>
            {rating}
            {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ReviewsCard