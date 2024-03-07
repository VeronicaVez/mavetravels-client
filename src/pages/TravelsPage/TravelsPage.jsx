import React from "react"

import TravelsList from "../../components/TravelsList/TravelsList"
import { Container, Row, Col } from "react-bootstrap"

const TravelsPage = () => {

    return (

        <Container>
            <Row>
                <Col>
                    <h1>Travels</h1>
                    <TravelsList></TravelsList>
                </Col>
            </Row>
        </Container>
    )
}

export default TravelsPage