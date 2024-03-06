import React from "react"
import { useState } from "react"
import DateRangePickerCalendar from "../DateRangePickerCalendar/DateRangePickerCalendar"
import axios from "axios"

import { Form, Row, Col, Button, InputGroup } from "react-bootstrap"

const API_BASE_URL = "http://localhost:5005/"

const NewTravelForm = () => {

    const [newTravel, setNewTravel] = useState({
        destination: '',
        continent: [],
        includesAccomodation: true,
        includesTransport: true,
        themes: [],
        itinerary: [{
            day: 0,
            title: '',
            activities: [],
            dayDescription: ''
        }],
        dates: {
            start: new Date(),
            end: new Date()
        },
        price: 0,
        source: ''
    })

    const [loadingImg, setLoadingImg] = useState(false)

    const handleFormSubmit = (e) => {

        e.preventDefault()

        axios
            .post(`${API_BASE_URL}/travels`, newTravel)
            .then(() => navigate(`/travels`))
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {

        const { name, value, type, checked } = e.target

        if (type === "checkbox") {
            setNewTravel(prevState => ({
                ...prevState,
                themes: checked ? [...prevState.themes, value] : prevState.themes.filter(theme => theme !== value)
            }))
        } else if (name === "day" || name === "title" || name === "activities" || name === "dayDescription") {
            const itinerary = [...newTravel.itinerary]
            const index = itinerary.findIndex(itineraryDay => itineraryDay.day === name)
            if (index !== -1) {
                itinerary[index][name] = value
            } else {
                itinerary.push({ [name]: value })
            }
            setNewTravel({ ...newTravel, itinerary })

        } else {
            setNewTravel(prevState => ({
                ...prevState,
                [name]: value
            }))
        }
    }


    const addActivity = () => {

    }

    const addDay = () => {

    }

    const handleActivityChange = (e, index) => {

        const { value } = e.target

        setNewTravel(prevState => {
            const updatedItinerary = [...prevState.itinerary]
            updatedItinerary[index].activities[0] = value
            return { ...prevState, itinerary: updatedItinerary }
        })
    }

    const handleFileUpload = e => {

        setLoadingImg(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setNewTravel({ ...newTravel, source: res.data.cloudinary_url })
                setLoadingImg(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImg(false)
            })
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Destination</Form.Label>
                        <Form.Control
                            type="text"
                            name="destination"
                            value={newTravel.destination}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Select
                        name="continent"
                        value={newTravel.continent}
                        onChange={handleInputChange}
                    >
                        <option>Choose the continent</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                        <option value="Europe">Europe</option>
                        <option value="Australia & Oceania">Australia & Oceania</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Check
                        reverse
                        type="switch"
                        id="accomodationSwitch"
                        label="Includes accomodation?"
                        onChange={handleInputChange}
                    />
                </Col>
                <Col>
                    <Form.Check
                        reverse
                        type="switch"
                        id="transportSwitch"
                        label="Includes transport?"
                        onChange={handleInputChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <Form.Label>What kind of travel is it?</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Check
                                inline
                                label="Beach life"
                                name="Beach life"
                                type="checkbox"
                                id="Beach life"
                            />
                            <Form.Check
                                inline
                                label="Trekking"
                                name="Trekking"
                                type="checkbox"
                                id="Trekking"
                            />
                            <Form.Check
                                inline
                                label="Party"
                                name="Party"
                                type="checkbox"
                                id="Party"
                            />
                            <Form.Check
                                inline
                                label="Sport"
                                name="Sport"
                                type="checkbox"
                                id="Sport"
                            />
                            <Form.Check
                                inline
                                label="Wild life"
                                name="Wild life"
                                type="checkbox"
                                id="Wild life"
                            />
                            <Form.Check
                                inline
                                label="Food"
                                name="Food"
                                type="checkbox"
                                id="Food"
                            />
                            <Form.Check
                                inline
                                label="Pet Friendly"
                                name="Pet Friendly"
                                type="checkbox"
                                id="Pet Friendly"
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Itinerary</Form.Label>
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        newTravel.itinerary.map((itineraryDay, index) => (
                            <div>
                                <Row key={index}>
                                    <Col>
                                        <Form.Label>Day Number</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={itineraryDay.day}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="string"
                                            value={itineraryDay.title}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>Activities</Form.Label>
                                        <Form.Control
                                            type="string"
                                            value={itineraryDay.activities}
                                        />
                                        <Button onClick={addActivity}>Add Activity</Button>

                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Day description</Form.Label>
                                            <Form.Control as="textarea" rows={4} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button onClick={addDay}>Add Day</Button>
                                    </Col>
                                </Row>
                            </div>
                        ))
                    }
                </Col>
            </Row>
            <Row>
                <Col>

                    <DateRangePickerCalendar />
                </Col>

                <Col>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="number"
                                name="price"
                                value={newTravel.price}
                                onChange={handleInputChange}
                            />
                            <InputGroup.Text>€</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control type="file" onChange={handleFileUpload} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={addDay} disabled={!loadingImg}>{loadingImg ? "Loading Image..." : "Create travel"}</Button>
                </Col>
            </Row>
        </Form >
    )
}

export default NewTravelForm

