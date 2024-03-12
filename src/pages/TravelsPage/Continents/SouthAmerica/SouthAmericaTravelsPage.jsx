import React from "react"
import TravelsList from '../../../../components/TravelsList/TravelsList'
import { Container } from "react-bootstrap"

import './SouthAmericaTravelsPage.css'

const SouthAmericaTravelsPage = () => {

    return (
        <Container className="TravelsPage">
            <h1>South America Travels</h1>
            <TravelsList />
        </Container>
    )
}

export default SouthAmericaTravelsPage