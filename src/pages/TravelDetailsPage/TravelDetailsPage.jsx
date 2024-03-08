import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Container, Card, Row, Col } from "react-bootstrap"

import './TravelDetailsPage.css'
import ItineraryList from "../../components/ItineraryList/ItineraryList"
import TravelsServices from "../../services/travels.services"
import { formatDate } from "../../utils/date.utils"


const TravelDetailsPage = () => {

    const [travel, setTravel] = useState({})

    const { travelId } = useParams()

    useEffect(() => {
        getTravel()
    }, [travelId])

    const getTravel = () => {
        TravelsServices
            .getTravel(travelId)
            .then(({ data }) => setTravel(data))
            .catch(err => console.error(err))
    }


    return (
        <Container className="TravelDetailsPage">
            <h1> {travel.destination} Travel Details</h1>
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
                        <Card.Body>Includes Accomodation {travel.includesaccomodation ? "✅" : "❌"}</Card.Body>
                        <Card.Body>Includes Transport {travel.includesaccomodation ? "✅" : "❌"}</Card.Body>
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


        </Container>
    )
}

export default TravelDetailsPage