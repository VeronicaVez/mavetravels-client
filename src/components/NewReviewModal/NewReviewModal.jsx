import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

import NewReviewForm from '../Forms/NewReviewForm/NewReviewForm'

const NewReviewModal = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
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