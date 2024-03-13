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

    createTravel(newTravel) {
        return this.axiosApi.post(`/api/travels`, newTravel)
    }

    searchTravelsByName(textQuery) {
        return this.axiosApi.get(`/api/travels/search?country_query=${textQuery}`);
    }

}

export default new TravelsServices()



