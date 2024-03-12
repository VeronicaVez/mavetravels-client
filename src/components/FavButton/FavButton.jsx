import React, { useState } from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

const FavButton = ({ onClick }) => {
    const [checked, setChecked] = useState(false)

    const handleButtonClick = () => {
        setChecked(!checked)
        onClick && onClick()
    }

    return (
        <ButtonGroup>
            <ToggleButton
                type="radio"
                variant={checked ? 'success' : 'outline-success'}
                name="radio"
                value={checked}
                checked={checked}
                onChange={handleButtonClick}
            >
                ♡
            </ToggleButton>
        </ButtonGroup>
    )
}

export default FavButton
