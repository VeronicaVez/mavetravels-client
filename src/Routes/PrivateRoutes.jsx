import React from "react"
import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "./../context/auth.context"
 
const PrivateRoute = () => {
 
    const { user } = useContext(AuthContext)
 
    if (!user) {
        return <Navigate to="/api/auth/login" />
    }
 
    return <Outlet />
}
 
export default PrivateRoute