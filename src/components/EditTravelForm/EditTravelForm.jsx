import React, { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "axios"
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap"
import './EditTravelForm.css'

import DateRangePickerCalendar from './../DateRangePickerCalendar/DateRangePickerCalendar'

const API_BASE_URL = "http://localhost:5005"
const travelThemes = ["Beach life", "Trekking", "Party", "Sports", "Wild life", "Food", "Pet Friendly"]


const EditTravelForm = () => {
    const { travelId } = useParams()
    const navigate = useNavigate()

    const [travelData, setTravelData] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadTravelDetails()
    }, [])

    const loadTravelDetails = () => {
        axios.get(`${API_BASE_URL}/api/travels/${travelId}`)
            .then(({ data }) => setTravelData(data))
            .catch(err => console.log(err))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        axios.put(`${API_BASE_URL}/api/travels/${travelId}`, travelData)
            .then(() => {
                setLoading(false)
                navigate(`/travels/${travelId}`)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setTravelData({ ...travelData, [name]: value })
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
                            onChange={handleInputChange}
                            value={travelData.destination}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label className="editTravelFormLabel">Continent</Form.Label>
                        <Form.Select
                            name="continent"
                            value={travelData.continent}
                        //onChange={handleInputChange}
                        >
                            <option value={'choose'}>Choose the continent</option>
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
                        checked={travelData.includesAccomodation}
                    //onChange={handleBooleanChange}
                    />
                </Col>
                <Col>
                    <Form.Check
                        type="switch"
                        id="transportSwitch"
                        label="Includes transport?"
                        checked={travelData.includesTransport}
                    //onChange={handleBooleanChange}
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
                                        //checked={travelData.themes.includes(theme)}
                                        //onChange={handleInputChange}
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
                        travelData.itinerary?.map((itineraryDay, index) => (
                            <div key={index}>
                                <Row>
                                    <Col>
                                        <Form.Label className="newTravelFormLabelItinerary">Day Number</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={itineraryDay.day}
                                            data-index={index}
                                            placeholder={itineraryDay.day}
                                            name="day"
                                        //onChange={handleInputChange}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label className="newTravelFormLabelItinerary">Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={itineraryDay.title}
                                            placeholder={itineraryDay.title}
                                            data-index={index}
                                            name="title"
                                        //onChange={handleInputChange}
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
                                                            placeholder={activity}

                                                        //onChange={(e) => handleActivityChange(e, index, activityIndex)}
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
                                                placeholder={itineraryDay.dayDescription}
                                                //onChange={handleInputChange}
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
                                value={travelData.price}
                                placeholder={travelData.price}

                            //onChange={handleInputChange}
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
                        <Form.Control
                            type="file"
                        //onChange={handleFileUpload}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="EditTravelFormRow">
                <Col>
                    <Link to={`/travels/${travelId}`}>
                        {/* <Button type="submit" disabled={loadingImg}>{loadingImg ? "Loading Image..." : "Save Changes"}</Button> */}
                        <Button type="submit" >Save Changes</Button>

                    </Link>
                </Col>
            </Row>
        </Form >

    )
}

export default EditTravelForm
