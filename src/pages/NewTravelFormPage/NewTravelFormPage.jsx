import React from "react"
import { Link, useParams } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"
import NewTravelForm from "../../components/Forms/NewTravelForm/NewTravelForm"

import './NewTravelFormPage.css'

const NewTravelFormPage = () => {

    const { travelId } = useParams()


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