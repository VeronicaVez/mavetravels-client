import React from "react"
import Cover from "./../../images/foto-capadocia.jpg"
import NewTravelForm from "../../components/NewTravelForm/NewTravelForm"
import "./HomePage.css"

import { Container, Row, Col } from "react-bootstrap"

const HomePage = () => {

    return (

        <div className="HomePage">
            <header>
                    <img src={Cover} alt="Capadocia" className="coverImage" />
            </header>
        </div>

    )
}

export default HomePage