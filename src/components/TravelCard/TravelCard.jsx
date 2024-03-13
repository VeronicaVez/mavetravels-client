import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import './TravelCard.css'
import { formatDate } from "../../utils/date.utils"

const TravelCard = ({ _id, destination, themes, dates, price, source }) => {


    return (
        <Link to={`/travels/details/${_id}`} >
            <Card className="TravelCard">
                <Card.Img variant="top" src={source} className="cardImg" />
                <Card.Body className="cardBody">
                    <Card.Title>{destination}</Card.Title>
                    <Card.Text>{formatDate(dates.start)} - {formatDate(dates.end)}</Card.Text>
                    <Card.Text>{price}€</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default TravelCard

