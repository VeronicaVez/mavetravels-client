import React from "react"
import { Button } from "react-bootstrap"
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "axios"

const API_BASE_URL = 'http://localhost:5005'

const UserProfilePage = () => {

    const { userId } = useParams()

    const navigate = useNavigate()

    const deleteUser = () => {
        axios
        .delete(`${API_BASE_URL}/api/users/${userId}`)
        .then(()=> navigate('/'))
        .catch(err=>console.log(err))
    }

    return (
        <div className="UserProfilePage">
        <h1>Profile</h1>
        <h2>Travels</h2>
        <h2>Reviews</h2>
        <Link to="/users/edit/:userId">
            <Button variant="primary">Update</Button>
        </Link>
        <Button variant="primary" onClick={deleteUser}>Delete</Button>
        </div>
        )
}

export default UserProfilePage