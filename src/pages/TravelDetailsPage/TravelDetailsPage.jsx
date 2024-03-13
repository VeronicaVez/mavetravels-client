import React, { useState, useEffect, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { Container, Card, Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap"
import { formatDate } from "../../utils/date.utils"

import ItineraryList from "../../components/ItineraryList/ItineraryList"
import TravelsServices from "../../services/travels.services"
import userServices from "../../services/user.services"
import ReviewsList from "../../components/ReviewsList/ReviewsList"

import { AuthContext } from './../../context/auth.context'

import './TravelDetailsPage.css'

const TravelDetailsPage = () => {

    const [travel, setTravel] = useState({})

    const { user, isLoggedIn } = useContext(AuthContext)
    const { travelId, username } = useParams()

    useEffect(() => {
        getTravel()
    }, [travelId])


    const getTravel = () => {
        TravelsServices
            .getTravel(travelId)
            .then(({ data }) => setTravel(data))
            .catch(err => console.error(err))
    }

    const handleAddFavTravel = () => {

        userServices
            .addFavTravel(travelId, user.username)
            .then(({ data }) => console.log('EL FAV YA TA', data))
            .catch(err => console.error(err))
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Add to my travels list
        </Tooltip>
    )



    return (
        <Container className="TravelDetailsPage">
            <Row>
                <Col>
                    <h1> {travel.destination} Travel Details</h1>
                </Col>
                <Col>
                    {
                        isLoggedIn && <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Button variant="danger" onClick={handleAddFavTravel}>♡</Button>
                        </OverlayTrigger>}
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