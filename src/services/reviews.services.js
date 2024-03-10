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

    deleteReview(reviewId) {
        return this.axiosApi.delete(`/reviews/${reviewId}`)
    }

}

export default new ReviewsServices()