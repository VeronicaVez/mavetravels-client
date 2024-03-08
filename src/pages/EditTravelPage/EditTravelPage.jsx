import { Container, Row, Col } from 'react-bootstrap'
import EditTravelForm from '../../components/EditTravelForm/EditTravelForm'

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