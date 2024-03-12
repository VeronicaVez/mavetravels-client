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
            <Row>
                <Col>
                    <Link to={`/admin-profile/edit-travel/${travelId}`}>
                        <Button variant="secondary" size="lg">
                            Edit form
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default NewTravelFormPage