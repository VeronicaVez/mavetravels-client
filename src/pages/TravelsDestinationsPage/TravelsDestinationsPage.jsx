import React from "react"
import TravelsList from '../../components/TravelsList/TravelsList'
import { Container } from "react-bootstrap"

import './TravelsDestinationsPage.css'
import { useParams } from "react-router-dom"

const TravelsDestinationsPage = () => {

    const { continent } = useParams()

    return (
        <Container className="TravelsPage">
            <h1>{continent} travels</h1>
            <TravelsList />
        </Container>
    )
}

export default TravelsDestinationsPage