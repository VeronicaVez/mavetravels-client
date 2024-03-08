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

    getUser = () => {
        return this.axiosApi.get("/userId")
    } 

    editUser = () => {
        return this.axiosApi.put("/edit/userId", data)
    }

    deleteUser = () => {
        return this.axiosApi.delete("/api/users/userId")
    }

}

const userServices = new UserServices()
export default userServices