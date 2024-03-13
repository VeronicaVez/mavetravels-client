import React from "react"
import { Button, Card, Container } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "./AboutUsPage.css"

function AboutUsPage() {

  return (
      <Container className="AboutUsPage">
          <div>
        <Card>
        <Card.Img />
        <Card.Body>
          <Card.Title>Maria Nogales</Card.Title>
                  <Link to="https://www.linkedin.com/in/maria-nogales-8668111a5/" className="Linkstyle">LinkedIn - </Link>
                  <Link to="https://github.com/MariaNogales" className="Linkstyle">GitHub</Link>
        </Card.Body>
              </Card>
          </div>
          <div>
      <Card>
        <Card.Img />
        <Card.Body>
          <Card.Title>Veronica Vezzoli</Card.Title>
                  <Link to="https://www.linkedin.com/in/veronica-vezzoli/" className="Linkstyle">LinkedIn -  </Link>
                  <Link to="https://github.com/VeronicaVez" className="Linkstyle">GitHub</Link>
        </Card.Body>
              </Card>
              </div>
    </Container>
  )
}

export default AboutUsPage