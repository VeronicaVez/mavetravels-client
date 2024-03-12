import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Container, Card, Row, Col, Button } from "react-bootstrap"
import { formatDate } from "../../utils/date.utils"

import ItineraryList from "../../components/ItineraryList/ItineraryList"
import TravelsServices from "../../services/travels.services"
import FavButton from "./../../components/FavButton/FavButton"

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

    const handleFavButtonClick = () => {
        const updatedIsFavorited = !isFavorited;
        setIsFavorited(updatedIsFavorited);

        // Llamar a la API para marcar o desmarcar el viaje como favorito
        const action = updatedIsFavorited ? 'mark' : 'unmark'; // Determinar la acción basada en el estado actual de favoritos
        TravelsServices.updateFavoriteStatus(travelId, action)
            .then(() => {
                console.log(`El viaje se ha ${action}ado correctamente como favorito.`);
            })
            .catch(err => {
                console.error(`Error al ${action}ar el viaje como favorito:`, err);
                // Si ocurre un error, revertir el estado de favoritos
                setIsFavorited(!updatedIsFavorited);
            });
    };


    return (
        <Container className="TravelDetailsPage">
            <Row>
                <Col>
                    <h1> {travel.destination} Travel Details</h1>
                </Col>
                <Col>
                    <FavButton />
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
                    <Link to={`/admin-profile/edit-travel/${travelId}`}>
                        <Button variant="secondary" size="lg">
                            Edit form
                        </Button>
                    </Link>
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