import React from "react"
import TravelsList from '../../../../components/TravelsList/TravelsList'
import { Container } from "react-bootstrap"

import './AsiaTravelsPage.css'

const AsiaTravelsPage = () => {

    return (
        <Container className="TravelsPage">
            <h1>Asia Travels</h1>
            <TravelsList />
        </Container>
    )
}

export default AsiaTravelsPage