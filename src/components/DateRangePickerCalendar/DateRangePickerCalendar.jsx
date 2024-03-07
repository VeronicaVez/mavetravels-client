import React, { useState } from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'

import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css'
import 'react-calendar/dist/Calendar.css'



const DateRangePickerCalendar = ({ startDate, endDate, onDateChange }) => {

    const [date, setDate] = useState([startDate, endDate])

    const handleChange = (newDate) => {
        setDate(newDate)
        onDateChange(newDate)
    }

    return (

        <DateRangePicker
            onChange={handleChange}
            value={date}
        />
    )
}


export default DateRangePickerCalendar
