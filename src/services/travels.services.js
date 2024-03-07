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

    createTravel = travelInfo => {
        return this.axiosApp.post(`/api/projects`, travelInfo)
    }

}

const travelsServices = new TravelsServices()
export default travelsServices
