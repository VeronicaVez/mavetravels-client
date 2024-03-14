import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

import NewReviewForm from '../Forms/NewReviewForm/NewReviewForm'
import './NewReviewModal.css'

const NewReviewModal = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button variant="danger" onClick={handleShow} className='addReviewButton'>
                Add Review
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewReviewForm />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NewReviewModal