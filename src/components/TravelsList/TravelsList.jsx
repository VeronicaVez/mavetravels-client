import React, { useState, useEffect } from "react"
import { Col, Row } from 'react-bootstrap'
import TravelsServices from "../../services/travels.services"
import TravelCard from "../TravelCard/TravelCard"
import SearchBar from "../SearchBar/SearchBar"
import { useParams } from "react-router-dom"
import travelsServices from "../../services/travels.services"

const TravelsList = () => {

    const [travels, setTravels] = useState([])

    const { continent } = useParams()


    useEffect(() => loadTravels(), [continent])


    const loadTravels = () => {

        const transaction = continent === 'All' ?
            TravelsServices.getAllTravels() :
            TravelsServices.getTravelsByContinent(continent)

        transaction
            .then(({ data }) => setTravels(data))
            .catch(err => console.error(err))
    }

    const loadSearchedTravels = textQuery => {
        travelsServices
            .searchTravelsByName(textQuery)
            .then(({ data }) => setTravels(data))
            .catch(err => console.error(err))
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