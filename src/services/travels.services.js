import axios from 'axios'

class TravelsServices {
    constructor() {
        this.axiosApi = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL
        })
    }

    getAllTravels() {
        return this.axiosApi.get(`/api/travels`)
    }

    getTravel(travelId) {
        return this.axiosApi.get(`/api/travels/${travelId}`)
    }
}

export default new TravelsServices()



