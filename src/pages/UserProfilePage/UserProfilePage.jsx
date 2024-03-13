import React, { useState, useEffect } from "react"
import { Button, Container, Row, Col, Offcanvas } from "react-bootstrap"
import { useParams, Link } from "react-router-dom"
import UserServices from "../../services/user.services.js"
import OffcanvasUsers from "../../components/OffcanvasUsers/OffcanvasUsers.jsx"

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
                    {user.travels}
                </Col>
            </Row>

        </Container>
    )
}

export default UserProfilePage
