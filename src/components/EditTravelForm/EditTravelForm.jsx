import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import TravelsServices from "../../services/travels.services"
import DateRangePickerCalendar from "../DateRangePickerCalendar/DateRangePickerCalendar"
import uploadServices from "../../services/upload.services"
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap"
import './EditTravelForm.css'

const API_BASE_URL = "http://localhost:5005"
const travelThemes = ["Beach life", "Trekking", "Party", "Sports", "Wild life", "Food", "Pet Friendly"]

const EditTravelForm = () => {

    const { travelId } = useParams()

    const [travel, setTravel] = useState({})
    const [loadingImg, setLoadingImg] = useState(false)

    useEffect(() => {
        getTravel()
    }, [])

    const getTravel = () => {
        TravelsServices
            .getTravel(travelId)
            .then(({ data }) => setTravel(data))
            .catch(err => console.error(err))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        axios
            .put(`${API_BASE_URL}/api/travels/${travelId}`, travel)
            .then(() => window.location.href = "/travels")
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target

        if (name === "themes") {
            const { value: theme } = e.target
            const updatedThemes = checked ? [...travel.themes, theme] : travel.themes.filter((t) => t !== theme)
            setTravel({ ...travel, themes: updatedThemes })
        } else {
            setTravel({ ...travel, [name]: value })
        }
    }

    const handleBooleanChange = (e) => {
        const { name, checked } = e.target
        setTravel({ ...travel, [name]: checked })
    }

    const handleActivityChange = (e, index, activityIndex) => {
        const { value } = e.target
        const updatedItinerary = [...travel.itinerary]
        updatedItinerary[index].activities[activityIndex] = value
        setTravel({ ...travel, itinerary: updatedItinerary })
    }

    const handleDateChange = (date) => {
        const [start, end] = date
        setTravel({ ...travel, dates: { start, end } })
    }

    const handleFileUpload = (e) => {
        setLoadingImg(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])
        uploadServices
            .uploadimage(formData)
            .then(res => {
                setTravel({ ...travel, source: res.data.cloudinary_url })
                setLoadingImg(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImg(false)
            })
    }

    return (
        <Form onSubmit={handleFormSubmit} className="EditTravelForm">
            <Row className="EditTravelFormRow">
                <Col>
                    <Form.Group>
                        <Form.Label className="editTravelFormLabel">Destination</Form.Label>
                        <Form.Control
                            type="text"
                            name="destination"
                            value={travel.destination}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label className="editTravelFormLabel">Continent</Form.Label>
                        <Form.Select
                            name="continent"
                            value={travel.continent}
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
                    </Form.Group>
                </Col>
            </Row>
            <Row className="EditTravelFormRow">
                <Col>
                    <Form.Check
                        type="switch"
                        id="accomodationSwitch"
                        label="Includes accomodation?"
                        checked={travel.includesAccomodation}
                        onChange={handleBooleanChange}
                    />
                </Col>
                <Col>
                    <Form.Check
                        type="switch"
                        id="transportSwitch"
                        label="Includes transport?"
                        checked={travel.includesTransport}
                        onChange={handleBooleanChange}
                    />
                </Col>
            </Row>
            <Row className="EditTravelFormRow">
                <Col>
                    <Row>
                        <Col >
                            <Form.Label className="newTravelFormLabel">What kind of travel is it?</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="themeContainer">

                            {
                                travelThemes.map((theme) => {
                                    return (
                                        <Form.Check
                                            className="themesCheckbox"
                                            inline
                                            label={theme}
                                            name="themes"
                                            type="checkbox"
                                            id={theme}
                                            key={theme}
                                            value={theme}
                                            checked={travel.themes.includes(theme)}
                                            onChange={handleInputChange}
                                        />
                                    )
                                })
                            }

                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="EditTravelFormRow ItineraryForm">
                <Col>
                    <Form.Label className="newTravelFormLabel">Itinerary</Form.Label>
                    {
                        travel.itinerary.map((itineraryDay, index) => (
                            <div key={index}>
                                <Row>
                                    <Col>
                                        <Form.Label className="newTravelFormLabelItinerary">Day Number</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={itineraryDay.day}
                                            data-index={index}
                                            name="day"
                                            onChange={handleInputChange}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label className="newTravelFormLabelItinerary">Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={itineraryDay.title}
                                            data-index={index}
                                            name="title"
                                            onChange={handleInputChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label className="newTravelFormLabelItinerary">Activities</Form.Label>
                                        {
                                            itineraryDay.activities.map((activity, activityIndex) => (
                                                <div key={activityIndex}>
                                                    <InputGroup>
                                                        <Form.Control
                                                            type="text"
                                                            value={activity}
                                                            onChange={(e) => handleActivityChange(e, index, activityIndex)}
                                                        />
                                                        <Button variant="outline-secondary">Remove</Button>
                                                    </InputGroup>
                                                </div>
                                            ))
                                        }
                                        <Button>Add Activity</Button>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className="newTravelFormLabelItinerary">Day description</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={4}
                                                value={itineraryDay.dayDescription}
                                                onChange={handleInputChange}
                                                name="dayDescription"
                                                data-index={index}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button>Add Day</Button>
                                    </Col>
                                </Row>
                            </div>
                        ))
                    }
                </Col>
            </Row>

            <Row className="EditTravelFormRow">
                <Col>
                    <Form.Label className="newTravelFormLabel">Select the dates</Form.Label>
                    <DateRangePickerCalendar />
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label className="newTravelFormLabel">Price</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="number"
                                name="price"
                                value={travel.price}
                                onChange={handleInputChange}
                            />
                            <InputGroup.Text>€</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="EditTravelFormRow">
                <Col>
                    <Form.Group>
                        <Form.Label className="newTravelFormLabel">Image</Form.Label>
                        <Form.Control type="file" onChange={handleFileUpload} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="EditTravelFormRow">
                <Col>
                    <Button type="submit" disabled={loadingImg}>{loadingImg ? "Loading Image..." : "Save Changes"}</Button>
                </Col>
            </Row>
        </Form >
    )
}

export default EditTravelForm