import React from "react"
import TravelsList from '../../../../components/TravelsList/TravelsList'
import { Container } from "react-bootstrap"

import './AustraliaTravelsPage.css'

const AustraliaTravelsPage = () => {

    return (
        <Container className="TravelsPage">
            <h1>Australia Travels</h1>
            <TravelsList />
        </Container>
    )
}

export default AustraliaTravelsPage