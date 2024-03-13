import React from "react"
import { Form, InputGroup } from 'react-bootstrap'


import './SearchBar.css'

const SearchBar = ({ searchHandler }) => {

    const handleSearch = (e) => {
        searchHandler(e.target.value)
    }

    return (

        <InputGroup className="SearchBar">
            <InputGroup.Text>🔎</InputGroup.Text>
            <Form.Control
                aria-label="SearchBar"
                type='text'
                placeholder='Search...'
                onChange={handleSearch}
            />
        </InputGroup>
    )
}

export default SearchBar