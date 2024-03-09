import React, { useState, useEffect } from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import { useParams, Link } from "react-router-dom"
import UserServices from "../../services/user.services.js"

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
<<<<<<< HEAD
        <div className="UserProfilePage">
            <h1>Welcome</h1>
            <h2>Travels</h2>
            <h2>Reviews</h2>
            <Link to={`/users/edit/${userId}`}>
                <Button variant="primary">Update</Button>
            </Link>
            <Button variant="primary" onClick={deleteUser}>Delete</Button>
        </div>
=======
        <Container className="UserProfilePage">
            <Row>
                <Col>
                    <h1>{usernameFirstLetterUppercase} Profile</h1>
                    <h2>My Travels</h2>
                    <h2>My Reviews</h2>
                    <Link to={`/users/edit/${username}`}>
                        <Button variant="primary">Update</Button>
                    </Link>
                    {/* <Button variant="primary" onClick={deleteUser}>Delete</Button> */}

                </Col>
            </Row>
        </Container>
>>>>>>> 886e88b52664db0662d447e84a92b773c2ddfaa0
    )
}

export default UserProfilePage
