import React from "react"
import Spinner from 'react-bootstrap/Spinner'
import "./LoadingPage.css"
import { Container } from "react-bootstrap"

function LoadingPage() {
    return(
        <Container className="Spinner">
            <Spinner animation="border" />
    </Container>
    )
}

export default LoadingPage