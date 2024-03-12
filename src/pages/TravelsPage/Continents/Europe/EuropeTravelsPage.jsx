import React from "react"
import TravelsList from '../../../../components/TravelsList/TravelsList'
import { Container } from "react-bootstrap"

import './EuropeTravelsPage.css'

const EuropeTravelsPage = () => {

    return (
        <Container className="TravelsPage">
            <h1>Europe Travels</h1>
            <TravelsList />
        </Container>
    )
}

export default EuropeTravelsPage