import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

import './TravelCard.css'

const TravelCard = ({ id, destination, themes, dates, price, source }) => {

    const navigate = useNavigate()

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const formattedDate = date.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })
        return formattedDate
    }

    return (
        <Link to={`/travel/${id}`} >
            <Card>
                <Card.Img variant="top" src={source} />
                <Card.Body>
                    <Card.Title>{destination}</Card.Title>
                </Card.Body>
                <ListGroup>
                    <ListGroup.Item>{themes}</ListGroup.Item>
                    <ListGroup.Item>{formatDate(dates.start)} - {formatDate(dates.end)}</ListGroup.Item>
                    <ListGroup.Item>{price}€</ListGroup.Item>
                </ListGroup>
            </Card>
        </Link>
    )
}

export default TravelCard

