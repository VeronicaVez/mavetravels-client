import React from "react"
import LogInForm from "./../../components/LoginForm/LogInForm"
import { Link } from "react-router-dom"

const LogInPage = () => {
    return (
        <div className="LoginPage">
            <h1>Login</h1>

            <LogInForm />

            <p>Don't have an account yet?  
            <Link to={"/signup"}>Sign Up</Link> </p>
        </div >
    )
}

export default LogInPage