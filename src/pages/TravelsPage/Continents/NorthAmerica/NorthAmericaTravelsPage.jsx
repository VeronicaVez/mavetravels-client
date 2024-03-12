import React from "react"
import TravelsList from '../../../../components/TravelsList/TravelsList'
import { Container } from "react-bootstrap"

import './NorthAmericaTravelsPage.css'

const NorthAmericaTravelsPage = () => {

    return (
        <Container className="TravelsPage">
            <h1>North America Travels</h1>
            <TravelsList />
        </Container>
    )
}

export default NorthAmericaTravelsPage