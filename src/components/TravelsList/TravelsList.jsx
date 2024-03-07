import React, { useState, useEffect } from "react"
import { Col, Row } from 'react-bootstrap'
import TravelsServices from "../../services/travels.services"
import TravelCard from "../TravelCard/TravelCard"

const TravelsList = () => {

    const [travels, setTravels] = useState([])

    useEffect(() => getAllTravels(), [])

    const getAllTravels = () => {
        TravelsServices
            .getAllTravels()
            .then(({ data }) => setTravels(data))
            .catch(err => console.error(err))
    }

    return (

        <Row>
            {
                travels.map((travel) => (
                    <Col key={travel.id} md={4}>
                        <TravelCard {...travel} />
                    </Col>
                ))
            }
        </Row>

    )
}

export default TravelsList