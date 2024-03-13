import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { formatDate } from "../../utils/date.utils"

import './TravelCard.css'

const TravelCard = ({ _id, destination, themes, dates, price, source }) => {

    return (

        <Link to={`/travels/details/${_id}`} className="LinkCard">
            <Card className="TravelCard">
                <Card.Img variant="top" src={source} className="cardImg" />
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">{destination}</Card.Title>
                    <Card.Text className="cardText">{formatDate(dates.start)} - {formatDate(dates.end)}</Card.Text>
                    <Card.Text className="cardText">{price}€</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default TravelCard

