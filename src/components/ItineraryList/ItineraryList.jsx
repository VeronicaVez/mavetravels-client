import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'

import './ItineraryList.css'
import ItineraryDay from '../ItineraryDay/ItineraryDay'
import TravelsServices from "../../services/travels.services"


const ItineraryList = () => {

    const [travel, setTravel] = useState({})

    const { travelId } = useParams()

    useEffect(() => {
        getTravel()
    }, [travelId])

    const getTravel = () => {
        TravelsServices
            .getTravel(travelId)
            .then(({ data }) => setTravel(data))
            .catch(err => console.error(err))
    }

    return (

        <Accordion className='ItineraryList'>
            {
                travel.itinerary?.map((day, idx) => <Accordion.Item key={idx}><ItineraryDay {...day} /></Accordion.Item>)
            }
        </Accordion>

    )
}


export default ItineraryList