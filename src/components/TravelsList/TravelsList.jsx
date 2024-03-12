import React, { useState, useEffect } from "react"
import { Col, Row } from 'react-bootstrap'
import TravelsServices from "../../services/travels.services"
import TravelCard from "../TravelCard/TravelCard"

import SearchBar from "../SearchBar/SearchBar"
import axios from "axios"
import { useParams } from "react-router-dom"

const API_BASE_URL = "http://localhost:5005"

const TravelsList = () => {

    const [travels, setTravels] = useState([])

    const { continent } = useParams()

    useEffect(() => loadTravels(), [continent])

    const loadTravels = () => {
        TravelsServices
            .getTravelsByContinent(continent)
            .then(({ data }) => setTravels(data))
            .catch(err => console.error(err))
    }

    const loadSearchedTravels = travelId => {
        axios
            .get(`${API_BASE_URL}/travels/${travelId}`)
            .then(({ data }) => setTravels(data))
            .catch(err => console.log(err))
    }

    const searchHandler = (searchTravel) => {
        loadSearchedTravels(searchTravel)
    }

    return (
        <Row>
            <Col>
                <Row>
                    <Col>
                        <SearchBar searchHandler={searchHandler} />
                    </Col>
                </Row>
                <Row>
                    {
                        travels.map((travel) => (
                            <Col key={travel._id} md={4}>
                                <TravelCard {...travel} key={travel._id} />
                            </Col>
                        ))
                    }
                </Row>
            </Col>
        </Row>



    )
}

export default TravelsList