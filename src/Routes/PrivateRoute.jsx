import React from "react"
import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "./../context/auth.context"
 
const PrivateRoute = () => {
 
    const { user, isLoading } = useContext(AuthContext)
 
    if (isLoading) {
        return (<h1>Loading</h1>)
    }
 
    if (!user) {
        return <Navigate to="/login" />
    }
}
 
export default PrivateRoute