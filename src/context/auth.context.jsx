import React, { useState, useEffect } from "react"
import axios from 'axios'

const AuthContext = React.createContext()

const API_URL = 'http://localhost:5005'

function AuthProviderWrapper(props) {

    useEffect(() => authenticateUser(), [])

    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const storeToken = tokenValue => {
        localStorage.setItem('authToken', tokenValue)
    }

    const authenticateUser = () => {

        const storedToken = localStorage.getItem('authToken')

        if (storedToken) {

            axios
                .get(`${API_URL}/api/auth/verify`, {
                    headers: { Authorization: `Bearer ${storedToken}` }
                })
                .then((response) => {
                    const { userInfo } = response.data;
                    setIsLoggedIn(true)
                    setUser(userInfo)
                    setIsLoading(false)
                })
                .catch((error) => {
                    setIsLoggedIn(false)
                    setUser(null)
                })
        } else {
            logout()
        }
    }

    const logout = () => {
        setUser(null)
        setIsLoggedIn(false)
        localStorage.removeItem('authToken')
        setIsLoading(false)
    }

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, storeToken, authenticateUser, logout, isLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthProviderWrapper, AuthContext }