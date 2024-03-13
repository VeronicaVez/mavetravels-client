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

    getTravelsByContinent(continent) {
        return this.axiosApi.get(`/api/travels/continent/${continent}`)
    }

    editTravel() {
        return this.axiosApi.post(`/api/travels`)
    }

    searchTravelsByName(query) {
        return this.axiosApi.get(`/api/travels/?name_like=${query}`);
    }

}

export default new TravelsServices()



