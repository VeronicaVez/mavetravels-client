import React from "react"
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"

import TravelsList from '../../components/TravelsList/TravelsList'
import './TravelsDestinationsPage.css'

const TravelsDestinationsPage = () => {

    const { continent } = useParams()

    return (

        <Container className="TravelsPage">
            <h1 className="travelsTitle">{continent} travels</h1>
            <TravelsList />
        </Container>
    )
}

export default TravelsDestinationsPage