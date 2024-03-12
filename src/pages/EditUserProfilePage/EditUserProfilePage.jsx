import React from "react"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import userServices from "../../services/user.services"

const API_BASE_URL = 'http://localhost:5005'

const EditUserProfilePage = () => {

    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        email: ""
    })

    const { username } = useParams()

    useEffect(() => loadUserInfo(), [])

    const navigate = useNavigate()

    const loadUserInfo = () => {
        userServices
            .getUser(username)
            .then(({ data }) => setUserInfo(data))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setUserInfo({ ...userInfo, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        
        userServices
            .editUser(username, data)
            .then(() => navigate(`/users/${username}`))
            .catch(err => console.log(err))
    }

    return (
        <div className="EditUserProfilePage" key={username}>
            <form onSubmit={handleFormSubmit}>
                <label>Username:</label>
                <input
                    name="username"
                    value={userInfo.username}
                    onChange={handleInputChange}
                />

                <label>Email:</label>
                <textarea
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                />

                <label>Password:</label>
                <textarea
                    name="password"
                    value={userInfo.password}
                    onChange={handleInputChange}
                />
                <button type="submit">Edit Profile</button>
            </form>
        </div>
    )
}

export default EditUserProfilePage