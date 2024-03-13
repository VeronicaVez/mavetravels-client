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
    //useEffect(() => loadAllTravels(), [])


    const loadTravels = () => {
        TravelsServices
            .getTravelsByContinent(continent)
            .then(({ data }) => setTravels(data))
            .catch(err => console.error(err))
    }

    // const loadAllTravels = () => {
    //     TravelsServices
    //         .getAllTravels
    //         .then(({ data }) => setTravels(data))
    //         .catch(err => console.error(err))
    // }

    const loadSearchedTravels = (query) => {
        TravelsServices
            .searchTravelsByName(query)
            .then(response => setTravels(response.data))
            .catch(error => console.error('Error searching travels:', error))
    }



    return (
        <Row>
            <Col>
                <Row>
                    <Col>
                        <SearchBar searchHandler={loadSearchedTravels} />
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