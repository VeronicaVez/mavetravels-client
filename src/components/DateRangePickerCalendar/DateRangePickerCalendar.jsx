import React from 'react'
import { useState } from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'

const DateRangePickerCalendar = () => {

    const [calendar, setCalendar] = useState([new Date(), new Date()])

    return <DateRangePicker />
}

export default DateRangePickerCalendar