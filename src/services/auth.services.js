import axios from "axios"

class AuthServices {

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

    loginUser = (requestBody) => {
        return this.axiosApp.post(`/api/auth/login`, requestBody)
    }

    signupUser = (requestBody) => {
        return this.axiosApp.post(`/api/auth/signup`, requestBody)
    }
}

export default new AuthServices()