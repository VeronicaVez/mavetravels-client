import React, { useEffect, useState } from "react"
import UserServices from "../../services/user.services"
import { formatDate } from "../../utils/date.utils"
import { Table } from "react-bootstrap"
import './UserList.css'

const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => getAllUsers(), [])

    const getAllUsers = () => {
        UserServices
            .getAllUsers()
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }

    return (
        <Table className="UsersTable">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Date Creation</th>
                </tr>
            </thead>
            {
                users.map((user) => (

                    <tbody key={user._id}>
                        <tr>
                            <td as="span">{user.username}</td>
                            <td as="span">{user.email}</td>
                            <td as="span">{formatDate(user.createdAt)}</td>
                        </tr>
                    </tbody>

                ))
            }
        </Table >
    )

}

export default UserList