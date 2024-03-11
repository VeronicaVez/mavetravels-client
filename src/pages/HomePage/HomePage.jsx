import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"

import Cover from "./../../images/foto-capadocia.jpg"
import NewTravelForm from "../../components/NewTravelForm/NewTravelForm"
import "./HomePage.css"

import airplane from './../../assets/images/airplane.jpeg'

const HomePage = () => {

    return (

        <Container className="HomePage">
            <Row>
                <Col>
                    <h1>HOME PAGE</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to={`/travels`}>
                        <img src={airplane} alt="Airplane image" />
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <header>
                        <img src={Cover} alt="Capadocia" className="coverImage" />
                    </header>
                </Col>
            </Row>
        </Container>


    )
}

export default HomePage