import React, { useEffect, useState } from "react"
import UserServices from "../../services/user.services"
import { formatDate } from "../../utils/date.utils"
import { Container, Row, Table } from "react-bootstrap"

const UserList = ({ _id, username, email, createdAt }) => {

    const [users, setUsers] = useState([])

    useEffect(() => getAllUsers(), [])
    
    const getAllUsers = () => {
        UserServices
            .getAllUsers()
            .then(({data}) => setUsers(data))
            .catch(err => console.log(err))
    }
    
    return (
        <div className="UserList">
        <Row>
            {
            users.map((user) => (
                <Container key={user._id}>
                    <Table className="Table">
                        <thead>
                            <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Date Creation</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td as="span">{user.username}</td>
                            <td as="span">{user.email}</td>
                            <td as="span">{formatDate(user.createdAt)}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Container> 
                ))
            }
            </Row>
            </div>
    )

}

export default UserList