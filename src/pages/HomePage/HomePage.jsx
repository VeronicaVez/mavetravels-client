import React from "react"
import Cover from "./../../images/Turkey.jpg"
import NewTravelForm from "../../components/NewTravelForm/NewTravelForm"
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

        <div className="HomePage">
            <img src={Cover} alt="Capadocia" className="coverImage" />
            <Container>
                <Col>
                    <Row className="trips">
                        <h2>Our Trips</h2>
                        <Col>
                            <Row>
                                <div>
                                    <img src={Thailand} alt="Thailand" className="Thailand" />
                                    <h3 className="favTrips">Here our top 3 destinations</h3>
                                    <p className="paragr">su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas v</p>
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
                                </p><p className="authoronly">
                                    Jawaharial Nehru
                                </p>
                            </Row>
                            <img src={Morocco} alt="Morocco" className="Morocco" />
                        </div>
                    </Row>
                </Col>
            </Container>
            <footer>
                <p>Developed by Maria and Veronica</p>
            </footer>
        </div>

    )
}

export default HomePage