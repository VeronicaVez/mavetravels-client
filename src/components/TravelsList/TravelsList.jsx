import React, { useState, useEffect } from "react"
import axios from "axios"
import { Col, Row } from 'react-bootstrap'

import TravelCard from "../TravelCard/TravelCard"
const API_BASE_URL = "http://localhost:5005"

const TravelsList = () => {

    const [travels, setTravels] = useState([])

    useEffect(() => loadTravels(), [])

    // TODO: SERVICIOS
    const loadTravels = () => {
        axios
            .get(`${API_BASE_URL}/api/travels`)
            .then(({ data }) => setTravels(data))
            .catch(err => console.log(err))
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