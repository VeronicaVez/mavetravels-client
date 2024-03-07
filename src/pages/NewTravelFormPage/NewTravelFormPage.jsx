import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import NewTravelForm from "../../components/NewTravelForm/NewTravelForm"

import './NewTravelFormPage.css'

const NewTravelFormPage = () => {

    return (
        <Container className="NewTravelFormPage">
            <Row>
                <Col>
                    <h1>Create a travel</h1>
                    <NewTravelForm />
                </Col>
            </Row>
        </Container>
    )
}

export default NewTravelFormPage