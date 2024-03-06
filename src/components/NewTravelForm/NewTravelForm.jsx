import React from "react"
import { useState } from "react"
import DateRangePickerCalendar from "../DateRangePickerCalendar/DateRangePickerCalendar"

import { Form, Row, Col, Button, InputGroup } from "react-bootstrap"

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


    const addActivity = () => {
        newTravel.itinerary.activities
    }

    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Destination</Form.Label>
                        <Form.Control
                            type="string"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Select>
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
                    />
                </Col>
                <Col>
                    <Form.Check
                        reverse
                        type="switch"
                        id="transportSwitch"
                        label="Includes transport?"
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
                            />
                            <InputGroup.Text>€</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
        </Form >
    )
}

export default NewTravelForm

