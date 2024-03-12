import React from "react"
import TravelsList from '../../../../components/TravelsList/TravelsList'
import { Container } from "react-bootstrap"

import './AfricaTravelsPage.css'

const AfricaTravelsPage = () => {

    return (
        <Container className="TravelsPage">
            <h1>Africa Travels</h1>
            <TravelsList />
        </Container>
    )
}

export default AfricaTravelsPage