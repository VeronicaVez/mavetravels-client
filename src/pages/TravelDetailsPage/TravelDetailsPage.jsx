import React, { useState, useEffect, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { Container, Card, Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap"
import { formatDate } from "../../utils/date.utils"

import ItineraryList from "../../components/ItineraryList/ItineraryList"
import TravelsServices from "../../services/travels.services"
import userServices from "../../services/user.services"
import ReviewsList from "../../components/ReviewsList/ReviewsList"
import NewReviewModal from "../../components/NewReviewModal/NewReviewModal"

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
            <Row className="TravelDetailsRow">
                <Col>
                    <h1> {travel.destination}</h1>
                </Col>

            </Row>
            <Row className="TravelDetailsRow">
                <div className="textFavThemesContainer">
                    <div className="textContainer">
                        <Card className="text">
                            <Card.Body>
                                Embark on a unique journey with our exciting trip to <strong>{travel.destination}</strong>!
                            </Card.Body>

                            <Card.Body>
                                From <strong>{formatDate(travel.dates?.start)} </strong>to <strong>{formatDate(travel.dates?.end)}</strong>, immerse yourself in the culture and beauty of this captivating destination. For just <strong>{travel.price}€</strong>, you'll have the opportunity to explore breathtaking landscapes, savor delicious local cuisine, and engage in thrilling activities.
                            </Card.Body>
                            <Card.Body>
                                Moreover, our package includes accommodation to ensure you feel at home throughout your stay. Don't miss out on this incredible opportunity for adventure and fun! Book now and get ready to experience unforgettable moments in {travel.destination}.
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="favThemesContainer">

                        {
                            isLoggedIn && <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Button variant="danger" onClick={handleAddFavTravel}>♡</Button>
                            </OverlayTrigger>
                        }


                        <Card>
                            {
                                travel.themes?.map((theme, idx) => {
                                    return <Card.Body key={idx}>{theme}</Card.Body>
                                })
                            }
                        </Card>

                    </div>
                </div>
            </Row>
            <Row className="TravelDetailsRow">
                <Col>
                    <ItineraryList />
                </Col>
            </Row>
            <Row className="TravelDetailsRow">
                <Col>
                    <ReviewsList />
                </Col>
            </Row>
            <Row className="TravelDetailsRow">
                <Col>
                    <Link to={`/travels`}>
                        <Button variant="secondary" size="lg">
                            Back
                        </Button>
                    </Link>
                </Col>
                <Col>
                    <NewReviewModal />
                </Col>
            </Row>

        </Container >
    )
}

export default TravelDetailsPage