import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import Cover from "./../../images/Turkey.jpg"
import Morocco from "./../../images/Morocco.jpg"
import Namibia from "./../../images/Namibia.jpg"
import Thailand from "./../../images/Thailand.jpg"
import Brazil from "./../../images/Brazil.jpg"
import ReviewsCarousel from "./../../components/ReviewsCarousel/ReviewsCarousel.jsx"
import "./HomePage.css"

const HomePage = () => {

    return (

        <div className="HomePage">

            <img src={Cover} alt="Capadocia" className="coverImage" />

            <Container>
                <Col>
                    <Row className="trips">
                        <h2 className="ourTripTitle">Our Trips</h2>
                        <Col>
                            <Row>
                                <div>
                                    <img src={Thailand} alt="Thailand" className="Thailand" />
                                    <h3 className="favTrips">Here our top 3 destinations</h3>
                                    <p className="favTripsParagraf">Embark on an unforgettable adventure to three extraordinary destinations: Namibia's surreal landscapes, Thailand's vibrant culture, and Brazil's pulsating rhythms. Discover the awe-inspiring beauty of Namibia's deserts, immerse yourself in Thailand's bustling markets, and feel the rhythm of Brazil's vibrant streets. Whether you crave adventure, relaxation, or cultural exploration, these destinations offer experiences that will leave you enchanted. Join us on a journey to Namibia, Thailand, and Brazil, and let your wanderlust take flight.</p>
                                </div>
                                <div>
                                    <img src={Namibia} alt="Namibia" className="Namibia" />
                                    <img src={Brazil} alt="Brazil" className="Brazil" />
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Container>
            <Col>
                <h2>Your Experiences</h2>
                <Row className="carousel-reviews">
                    <ReviewsCarousel />
                </Row>
            </Col>
            <Container>
                <Col>
                    <Row>
                        <div className="phrase">
                            <Row>
                                <p className="phraseonly">
                                    “We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.”
                                </p>
                                <p className="authoronly">
                                    Jawaharial Nehru
                                </p>
                            </Row>
                            <img src={Morocco} alt="Morocco" className="Morocco" />
                        </div>
                    </Row>
                </Col>
            </Container>
        </div>

    )
}

export default HomePage