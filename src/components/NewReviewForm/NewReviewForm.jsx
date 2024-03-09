import React from "react"
import axios from "axios"
import { useState, useParams, useEffect } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import uploadServices from "../../services/upload.services"
import { useNavigate } from "react-router-dom"
import ReviewsServices from "../../services/reviews.services"

const API_BASE_URL = "http://localhost:5005"

const NewReviewForm = () => {

    const [newReview, setNewReview] = useState({
        source: "",
        title: "",
        description: "",
        rating: "",
        userId: "",
        travelId: ""
    })

    const navigate = useNavigate()

    const [loadingImg, setLoadingImg] = useState(false)

    const handleFormSubmit = (e) => {
        
         e.preventDefault()

        const { user, title, description, rating, source, travel } = newReview
        const requestBody = { user, title, description, rating, source, travel }
        
        useEffect(() => getAllReviews(), [])

        const getAllReviews = () => 
        ReviewsServices
            .getAllReviews()
            .then(() => navigate(`/reviews`))
            .catch(err => console.log(err))
    }

    const handleChangeReview = (e) => {
        const { value, name } = e.target
        setNewReview((prevState) => ({
            ...prevState,
                [name]: value,
            }))
    }

    const handleFileUpload = e => {

        setLoadingImg(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setNewReview({ ...newReview, source: res.data.cloudinary_url })
                setLoadingImg(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImg(false)
            })
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Rate in a scale of 1 to 5</Form.Label>
                <Form.Select
                    type='number'
                    value={newReview.rating}
                    onChange={handleChangeReview}
                    name={'rating'}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Title"
                    onChange={handleChangeReview}
                    value={newReview.title}
                    name="title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Describe your experience with us here!"
                    onChange={handleChangeReview}
                    value={newReview.description}
                    name="description" />
            </Form.Group>
            <hr />
            <Row className="NewReviewFormRow">
                <Col>
                    <Form.Group>
                        <Form.Control type="file" onChange={handleFileUpload} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="NewReviewForm">
                <Col>
                    <Button type="submit" disabled={loadingImg}>{loadingImg ? "Loading Image..." : "Create review"}</Button>
                </Col>
            </Row>
        </Form>

    )
}
export default NewReviewForm