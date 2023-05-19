import { Container, Col,Row } from "react-bootstrap"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import NavbarComponent from "../../components/NavbarComponent"
import "../../assets/adminsOnly.css"

const AdminsOnly = (props) => {

    const currentUserInfo = useSelector((state) => state.currentUser.currentUser);
    const userRole = currentUserInfo.role;
    const isAdmin = userRole === "Admin";

    console.log("userRole: ", userRole)

    return(
        <>
        <NavbarComponent />
        <Col col="4" md="2" sm="3">
            <div className="admin-dragon-wrapper">
            <img className="admin-dragon" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684417100/Untitled_design_munqlw.png" alt="Chinese dragon" />
            </div>
        </Col>

        <Container className="adminsOnly-container">
            {isAdmin ? (
            <>

            <Row>
            <Col col="10" md="6" >
                <div className="nihao-admin">
                <h1>Nihao, Admin {currentUserInfo.firstName}!</h1>
                <h2>What would you like to do?</h2>
                </div>
            </Col> 
            
            <Col>
                <Row>
                <a className="handle-users" href="/admin/handleUsers">
                Handle Users
                </a>
            </Row>

            <Row>
                <div className="handle-games"
                // href="/admin/handleGames"
                >
                Handle Games <span>(coming soon)</span>
                </div>
            </Row>
            </Col>      

            </Row>
            </>
        ) : (
            <>
            <Col col="10" md="6" >
                <h1>Nihao, {currentUserInfo.firstName}.</h1>
                <h2>This entry is for Admins only.</h2>
            </Col>
            <Col>
            <Row>
                <a className="handle-users" href="/">
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