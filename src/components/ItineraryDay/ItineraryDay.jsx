import React from 'react'
import { Accordion, Dropdown, DropdownButton, ButtonGroup, Card } from 'react-bootstrap'

import './ItineraryDay.css'

const ItineraryDay = ({ day, title, activities, dayDescription }) => {

    return (
        <Accordion.Item eventKey="0">
            <Accordion.Header className='accordionHeader'>Day {day} - {title}</Accordion.Header>
            <Accordion.Body>
                {dayDescription}
                {
                    activities.length > 0 ?

                        <Accordion defaultActiveKey="0">
                            <DropdownButton
                                as={ButtonGroup}
                                align={{ lg: 'end' }}
                                title="Activities"
                            >
                                {
                                    activities?.map((activity, idx) => <Dropdown.Item eventKey="1" key={idx}>{activity}</Dropdown.Item>)
                                }
                            </DropdownButton>
                        </Accordion>
                        :
                        <Card.Body>No scheduled activities</Card.Body>
                }
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default ItineraryDay