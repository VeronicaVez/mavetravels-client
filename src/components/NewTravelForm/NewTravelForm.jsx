import React, { useState } from "react"
import axios from "axios"

import DateRangePickerCalendar from "../DateRangePickerCalendar/DateRangePickerCalendar"
import uploadServices from "../../services/upload.services"
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap"
import './NewTravelForm.css'

const API_BASE_URL = "http://localhost:5005"
const travelThemes = ["Beach life", "Trekking", "Party", "Sports", "Wild life", "Food", "Pet Friendly"]

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

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [loadingImg, setLoadingImg] = useState(false)

    const handleFormSubmit = (e) => {

        e.preventDefault()

        axios
            .post(`${API_BASE_URL}/api/travels`, newTravel)
            .then(() => navigate(`/travels`))
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {

        const { name, value, type, checked } = e.target

        if (name === "themes") {
            const { checked } = e.target
            const { value: theme } = e.target

            let updatedThemes
            if (checked) {
                updatedThemes = [...newTravel.themes, theme]
            } else {
                updatedThemes = newTravel.themes.filter((t) => t !== theme)
            }
            setNewTravel({ ...newTravel, themes: updatedThemes })

        } else if (name === "continent") {

            setNewTravel((prevState) => ({
                ...prevState,
                continent: value
            }))

        } else if (name === "day" || name === "title" ||
            name === "activities" || name === "dayDescription") {

            const { index } = e.target.dataset
            const itinerary = [...newTravel.itinerary]
            itinerary[index][name] = value

            setNewTravel((prevState) => ({
                ...prevState,
                itinerary: itinerary
            }))

        } else {
            setNewTravel((prevState) => ({
                ...prevState,
                [name]: value
            }))
        }
    }

    const handleBooleanChange = (e) => {

        const { name, checked } = e.target

        setNewTravel((prevState) => ({
            ...prevState,
            [name]: checked
        }))
    }

    const addActivity = (index) => {

        setNewTravel((prevState) => {
            const updatedItinerary = [...prevState.itinerary]
            updatedItinerary[index].activities.push('')
            return { ...prevState, itinerary: updatedItinerary }
        })
    }

    const removeActivity = (dayIndex, activityIndex) => {

        setNewTravel((prevState) => {
            const updatedItinerary = [...prevState.itinerary]
            updatedItinerary[dayIndex].activities.splice(activityIndex, 1)
            return { ...prevState, itinerary: updatedItinerary }
        })
    }

    const addDay = () => {

        setNewTravel((prevState) => {
            const updatedItinerary = [
                ...prevState.itinerary,
                {
                    day: prevState.itinerary.length,
                    title: "",
                    activities: [],
                    dayDescription: ""
                }
            ]
            return { ...prevState, itinerary: updatedItinerary }
        })
    }

    const handleActivityChange = (e, index, activityIndex) => {

        const { value } = e.target

        setNewTravel((prevState) => {
            const updatedItinerary = [...prevState.itinerary]
            updatedItinerary[index].activities[activityIndex] = value
            return { ...prevState, itinerary: updatedItinerary }
        })
    }

    const handleDateChange = (date) => {

        const [startDate, endDate] = date
        setStartDate(startDate)
        setEndDate(endDate)

        setNewTravel((prevState) => ({
            ...prevState,
            dates: {
                start: startDate,
                end: endDate,
            }
        }))
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

        <Form onSubmit={handleFormSubmit} className="NewTravelForm">
            <Row className="NewTravelFormRow">
                <Col>
                    <Form.Group>
                        <Form.Label className="newTravelFormLabel">Destination</Form.Label>
                        <Form.Control
                            type="text"
                            name="destination"
                            value={newTravel.destination}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label className="newTravelFormLabel">Continent</Form.Label>
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
                    </Form.Group>
                </Col>
            </Row>
            <Row className="NewTravelFormRow">
                <Col>
                    <Form.Check
                        type="switch"
                        id="accomodationSwitch"
                        label="Includes accomodation?"
                        checked={newTravel.includesAccomodation}
                        onChange={handleBooleanChange}
                    />
                </Col>
                <Col>
                    <Form.Check
                        type="switch"
                        id="transportSwitch"
                        label="Includes transport?"
                        checked={newTravel.includesTransport}
                        onChange={handleBooleanChange}
                    />
                </Col>
            </Row>
            <Row className="NewTravelFormRow">
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
                                            checked={newTravel.themes.includes(theme)}
                                            onChange={handleInputChange}
                                        />
                                    )
                                })
                            }

                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="NewTravelFormRow  ItineraryForm">
                <Row>
                    <Col>
                        <Form.Label className="newTravelFormLabel">Itinerary</Form.Label>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        {
                            newTravel.itinerary.map((itineraryDay, index) => (
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
                                                            <Button variant="outline-secondary" onClick={() => removeActivity(index, activityIndex)}>Remove</Button>
                                                        </InputGroup>
                                                    </div>
                                                ))
                                            }
                                            <Button onClick={() => addActivity(index)}>Add Activity</Button>
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
                                            <Button onClick={addDay}>Add Day</Button>

                                        </Col>
                                    </Row>

                                </div>
                            ))
                        }
                    </Col>
                </Row>
            </Row>
            <Row className="NewTravelFormRow">
                <Col>
                    <Form.Label className="newTravelFormLabel">Select the dates</Form.Label>
                    <DateRangePickerCalendar
                        startDate={startDate}
                        endDate={endDate}
                        onDateChange={handleDateChange}
                    />
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label className="newTravelFormLabel">Price</Form.Label>
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
            <Row className="NewTravelFormRow">
                <Col>
                    <Form.Group>
                        <Form.Label className="newTravelFormLabel">Image</Form.Label>
                        <Form.Control type="file" onChange={handleFileUpload} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="NewTravelFormRow">
                <Col>
                    <Button type="submit" disabled={loadingImg}>{loadingImg ? "Loading Image..." : "Create travel"}</Button>
                </Col>
            </Row>
        </Form >

    )
}

export default NewTravelForm