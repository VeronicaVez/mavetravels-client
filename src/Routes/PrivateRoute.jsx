import React from "react"
import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "./../context/auth.context"

const PrivateRoute = ({ adminAccess }) => {

    const { user, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return (<h1>Loading</h1>)
    }

    if (!user) {
        return <Navigate to="/login?error=notLogged" />
    }

    if (adminAccess && user.role != 'admin') {
        return <Navigate to="/login?error=unauthorized" />
    }

    return <Outlet />
}

export default PrivateRoute