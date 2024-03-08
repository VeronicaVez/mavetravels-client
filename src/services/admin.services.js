import axios from "axios"

class AdminServices {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL
        })

        this.axiosApp.interceptors.request.use(config => {

            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllUsers = () => {
        return this.axiosApp.get(`/api/users`)
    }

    getUser = () => {
        return this.axiosApp.get(`/api/users/userId`)
    }

    deleteUser = () => {
        return this.axiosApp.delete(`/api/users/userId`)
    }

    createNewTravel = () => {
        return this.axiosApp.post(`/api/travels`)
    }
}

export default new AdminServices()