import React from "react"
import Cover from "./../../images/Turkey.jpg"
import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"


import NewTravelForm from "../../components/Forms/NewTravelForm/NewTravelForm"
import Morocco from "./../../images/Morocco.jpg"
import Namibia from "./../../images/Namibia.jpg"
import Thailand from "./../../images/Thailand.jpg"
import Turkey from "./../../images/Turkey.jpg"
import Brazil from "./../../images/Brazil.jpg"
import ReviewsCarousel from "./../../components/ReviewsCarousel/ReviewsCarousel.jsx"
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