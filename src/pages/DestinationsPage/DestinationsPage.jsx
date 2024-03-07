import React from "react"

import DestinationsList from "../../components/DestinationsList/DestinationList"
import { Container, Row, Col } from "react-bootstrap"

const DestinationsPage = () => {

    return (

        <Container>
            <Row>
                <Col>
                    <h1>hola</h1>
                    <DestinationsList></DestinationsList>
                </Col>
            </Row>
        </Container>
    )
}

export default DestinationsPage