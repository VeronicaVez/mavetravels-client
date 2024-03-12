import React from "react"

import TravelsList from "../../components/TravelsList/TravelsList"
import { Container } from "react-bootstrap"

const TravelsPage = () => {

    return (

        <Container className="TravelsPage">
            <h1>Travels</h1>
            <TravelsList />
        </Container>

    )
}

export default TravelsPage