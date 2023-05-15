import { Container, Col,Row } from "react-bootstrap"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

const AdminsOnly = (props) => {

    const currentUserInfo = useSelector((state) => state.currentUser.currentUser);
    const userRole = currentUserInfo.role;
    const isAdmin = userRole === "Admin";

    console.log("userRole: ", userRole)

    return(
        <>
        <Container>
            {isAdmin ? (
            <>
            <Col>
                <h1>Nihao, Admin {currentUserInfo.firstName}!</h1>
                <h2>What would you like to do?</h2>
            </Col>

            <Col>
            <Row>
                <a className="mb-3" href="/admin/handleUsers">
                Handle Users
                </a>
            </Row>
            </Col>

            <Col>
            <Row>
                <a className="mb-3" href="/admin/handleGames">
                Handle Games
                </a>
            </Row>
            </Col>
            </>
        ) : (
            <>
            <Col>
                <h1>Nihao, {currentUserInfo.firstName}.</h1>
                <h2>This entry is for Admins only.</h2>
            </Col>
            <Col>
            <Row>
                <a className="mb-3" href="/">
                Go Back
                </a>
            </Row>
            </Col>
            </>
        )}
        </Container>
        </>
    )
}

export default AdminsOnly