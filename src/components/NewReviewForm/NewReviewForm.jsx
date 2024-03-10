import React from "react"
import axios from "axios"
import { useState, useParams, useEffect } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import uploadServices from "../../services/upload.services"
import { useNavigate } from "react-router-dom"
import ReviewsServices from "../../services/reviews.services"
import "./NewReviewForm.css"

import { FaStar } from "react-icons/fa"

const API_BASE_URL = "http://localhost:5005"

const NewReviewForm = () => {

    const [newReview, setNewReview] = useState({
        source: "",
        title: "",
        description: "",
        rating: "",
        user: {
            "Id": "",
            "username": ""
        },
        travel: {
            "Id": "",
            "destination": ""
        },
    })

    const navigate = useNavigate()

    const [loadingImg, setLoadingImg] = useState(false)

    const handleFormSubmit = (e) => {
        
        e.preventDefault()

        axios
            .post(`${API_BASE_URL}/api/reviews`, newReview)
            .then(() => navigate('/reviews'))
            .catch(err => console.log(err))
    }

    const handleChangeReview = (e) => {
        const { value, name } = e.target
        setNewReview((prevState) => ({
            ...prevState,
                [name]: name === 'rating' ? parseInt(value, 10) : value,
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

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return (
        <Form onSubmit={handleFormSubmit}>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1
                return (
                    <label>
                    <input
                            type='radio'
                            name='rating'
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                    />
                        <FaStar
                            className="star"
                            size={25}
                            color={currentRating <= (hover || rating) ? "#F5DD61" : "#000000"}
                            onMouseEnter={() =>setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                            />
                        </label>
                )
            })}
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