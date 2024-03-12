import axios from 'axios'

class ReviewsServices {

    constructor() {
        this.axiosApi = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL
        })
    }

    getAllReviews() {
        return this.axiosApi.get(`/api/reviews`)
    }

    getReview(reviewId) {
        return this.axiosApi.get(`/api/reviews/${reviewId}`)
    }

    postReview(newReview) {
        return this.axiosApi.post(`/api/reviews`, newReview)
    }

    editReview(reviewId, updatedReview) {
        return this.axiosApi.put(`/api/reviews/${reviewId}`, updatedReview)
    }

    deleteReview(reviewId) {
        return this.axiosApi.delete(`/api/reviews/${reviewId}`)
    }

}

export default new ReviewsServices()