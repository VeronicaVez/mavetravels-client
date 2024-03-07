import React from "react"

import TravelsList from "../../components/TravelsList/TravelsList"
import { Container } from "react-bootstrap"

const TravelsPage = () => {

    return (
        <div className="TravelsPage">
            <Container>
                <h1>Travels</h1>
                <TravelsList />
            </Container>
        </div>
    )
}

export default TravelsPage