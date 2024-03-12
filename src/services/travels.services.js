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

<<<<<<< HEAD
    getTravelsByContinent(continent) {
        return this.axiosApi.get(`/api/travels/continent/${continent}`)
=======
    editTravel() {
        return this.axiosApi.post(`/api/travels`)
>>>>>>> 39ec409fbd4771b2268f34145be811a63b4dca7f
    }

}

export default new TravelsServices()



