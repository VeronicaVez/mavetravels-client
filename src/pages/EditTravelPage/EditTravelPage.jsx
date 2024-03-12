import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import EditTravelForm from '../../components/Forms/EditTravelForm/EditTravelForm'

import './EditTravelPage.css'

const EditTravelPage = () => {

    return (
        <Container className='EditTravelPage'>
            <Row>
                <Col>
                    <h1>Edit travel</h1>
                </Col>
            </Row>
            <EditTravelForm />
        </Container>
    )
}

export default EditTravelPage