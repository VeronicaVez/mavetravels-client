import axios from 'axios'

class UserServices {

    constructor() {

        this.axiosApi = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL
        })

        this.axiosApi.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }
    getAllUsers = () => {
        return this.axiosApi.get("/api/users")
    }

    getUser(username) {
        return this.axiosApi.get(`/api/users/${username}`)
    }

    editUser(username, data) {
        return this.axiosApi.put(`/api/users/${username}`, data)
    }

    deleteUser(username) {
        return this.axiosApi.delete(`/api/user/${username}`)
    }

    addTravelToUser = async (travelId) => {
        try {
            await axios.put(`/api/users/add-travel/${travelId}`)
        } catch (error) {
            throw error
        }
    }

}

export default new UserServices()
