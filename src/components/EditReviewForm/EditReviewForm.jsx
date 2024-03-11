import React from "react"
import { useState, useEffect, useContext } from "react"
import reviewsServices from "../../services/reviews.services"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap"
import uploadServices from "../../services/upload.services"
import { AuthContext } from "../../context/auth.context"

import { FaStar } from "react-icons/fa"


const EditReviewForm = () => {

    const [reviewData, setReviewData] = useState({
        title: "",
        source: "",
        description: "",
        rating: ""
    })
    
    const { reviewId } = useParams()

    const [loadingImg, setLoadingImg] = useState(false)

    useEffect(() => getReview(reviewId), [reviewId])

    const navigate = useNavigate()
    
    const getReview = (reviewId) => {

        reviewsServices
            .getReview(reviewId)
            .then(({ data }) => setReviewData(data))
            .catch(err => console.error(err))
    }

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setReviewData({ ...reviewData, [name]: value })
    }

    const handleFormSubmit = (e) => {

        e.preventDefault()

        reviewsServices
            .editReview(reviewId, reviewData)
            .then(() => navigate(`/reviews/${reviewId}`))
            .catch(err => console.log(error))
    }

    const handleFileUpload = e => {

        setLoadingImg(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setReviewData({ ...reviewData, source: res.data.cloudinary_url })
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
            <Form.Group className="mb-3" controlId="form-rating">
                {[...Array(5)].map((star, index) => {
                const currentRating = index + 1
                return (
                    <label>
                    <input
                            type='radio'
                            name='rating'
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                            onChange={handleInputChange}
                    />
                        <FaStar
                            className="star"
                            size={25}
                            color={currentRating <= (hover || reviewData.rating) ? "#F5DD61" : "#F6F7C4"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                            />
                        </label>
                )
            })}
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-title">
                <Form.Control
                    as="textarea"
                    rows={1}
                    onChange={handleInputChange}
                    value={reviewData.title}
                    name="title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-description">
                <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={handleInputChange}
                    value={reviewData.description}
                    name="description" />
            </Form.Group>
                <Form.Group>
                    <Form.Control type="file" onChange={handleFileUpload} />
                </Form.Group>
            <Button type="submit" disabled={loadingImg}>{loadingImg ? "Loading Image..." : "Change reviewData"}</Button>
        </Form>
    )

}


export default EditReviewForm