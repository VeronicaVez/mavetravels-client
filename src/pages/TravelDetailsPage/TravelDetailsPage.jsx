import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Container, Card, Row, Col, Button } from "react-bootstrap"
import { formatDate } from "../../utils/date.utils"

import ItineraryList from "../../components/ItineraryList/ItineraryList"
import TravelsServices from "../../services/travels.services"
import userServices from "../../services/user.services"
import ReviewsList from "../../components/ReviewsList/ReviewsList"

import './TravelDetailsPage.css'

const TravelDetailsPage = () => {

    const [travel, setTravel] = useState({})
    const [isFavorited, setIsFavorited] = useState(false)

    const { travelId } = useParams()

    useEffect(() => {
        getTravel()
    }, [travelId])

    useEffect(() => {
        setIsFavorited(travel.isFavorited || false)
    }, [travel])


    const getTravel = () => {
        TravelsServices
            .getTravel(travelId)
            .then(({ data }) => setTravel(data))
            .catch(err => console.error(err))
    }

    const handleAddToUser = async () => {
        try {
            await userServices.addTravelToUser(travelId)
            alert("Travel added to your list!")
        } catch (error) {
            console.error("Error adding travel to user:", error)
            alert("Failed to add travel to your list. Please try again later.")
        }
    }


    return (
        <Container className="TravelDetailsPage">
            <Row>
                <Col>
                    <h1> {travel.destination} Travel Details</h1>
                </Col>
                <Col>
                    <Button onClick={handleAddToUser}>♡</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>From {formatDate(travel.dates?.start)} to {formatDate(travel.dates?.end)} </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>Price: {travel.price}€ </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>Includes Accomodation {travel.includesaccomodation ? "❌" : "✅"}</Card.Body>
                        <Card.Body>Includes Transport {travel.includesaccomodation ? "❌" : "✅"}</Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        {
                            travel.themes?.map((theme, idx) => {
                                return <Card.Body key={idx}>{theme}</Card.Body>
                            })
                        }
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItineraryList />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ReviewsList />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to={`/travels`}>
                        <Button variant="secondary" size="lg">
                            Back
                        </Button>
                    </Link>
                </Col>
            </Row>


        </Container >
    )
}

export default TravelDetailsPage