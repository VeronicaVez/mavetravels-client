import React, { useState, useEffect } from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import { useParams, Link } from "react-router-dom"
import UserServices from "../../services/user.services.js"

import './AdminProfilePage.css'

const AdminProfilePage = () => {

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
                    <h1>Admin Profile</h1>

                </Col>
            </Row>
        </Container>
    )
}

export default AdminProfilePage
