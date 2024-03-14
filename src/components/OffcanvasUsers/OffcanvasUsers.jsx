import React, { useState, useContext } from "react"
import { Row, Col, Button, Offcanvas } from "react-bootstrap"
import UserList from '../../components/UserList/UserList'
import { AuthContext } from './../../context/auth.context'


import './OffcanvasUsers.css'

const OffcanvasUsers = ({ name, ...props }) => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { userAdmin, isLoggedIn, logout } = useContext(AuthContext)


    return (
        <Row>
            <Col>
                {
                    isLoggedIn && (
                        <>
                            {
                                userAdmin?.role === "admin"
                                    ?
                                    (
                                        <>
                                            <Button variant="primary" onClick={handleShow}>
                                                Users
                                            </Button>
                                            <Offcanvas show={show} onHide={handleClose} {...props} placement={'end'}>
                                                <Offcanvas.Header closeButton>
                                                    <Offcanvas.Title className="OffTitle">Users List</Offcanvas.Title>
                                                </Offcanvas.Header>
                                                <Offcanvas.Body>
                                                    <UserList />
                                                </Offcanvas.Body>
                                            </Offcanvas>

                                        </>
                                    )
                                    :
                                    null
                            }
                        </>
                    )
                }
            </Col>
        </Row>
    )
}

export default OffcanvasUsers

