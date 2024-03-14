import React, { useState, useEffect, useContext } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import UserServices from "../../services/user.services.js"
import OffcanvasUsers from "../../components/OffcanvasUsers/OffcanvasUsers.jsx"
import { formatDate } from "../../utils/date.utils.js"
import './UserProfilePage.css'

const UserProfilePage = () => {

    const [user, setUser] = useState({})

    const { username } = useParams()

    useEffect(() => {
        getUser()
    }, [username])

    const getUser = () => {
        UserServices
            .getUser(username)
            .then(({ data }) => setUser(data))
            .catch(err => console.error(err))
    }

    const usernameFirstLetterUppercase = username.charAt(0).toUpperCase() + username.slice(1)

    return (
        <Container className="UserProfilePage">
            <Row>
                <Col>
                    <h1>{usernameFirstLetterUppercase} Profile</h1>
                </Col>
                <Col>
                    <OffcanvasUsers />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>My Tavels</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        user.travels
                        &&
                        user.travels?.map((travel, idx) => {
                            return (

                                <Card key={idx} className="TravelCard">
                                    <Card.Img variant="top" src={travel?.source} />
                                    <Card.Body>
                                        <Card.Title>{travel?.destination}</Card.Title>
                                        <Card.Text>{formatDate(travel?.dates.start)} - {formatDate(travel?.dates.end)}</Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Col>
            </Row>

        </Container>
    )
}

export default UserProfilePage
