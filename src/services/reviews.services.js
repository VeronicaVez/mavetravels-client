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

    getReview() {
        return this.axiosApi.get(`/api/reviews/reviewId`)
    }

    deleteReview = () => {
        return this.axiosApp.delete(`/api/reviews/reviewId`)
    }

}

export default new ReviewsServices()