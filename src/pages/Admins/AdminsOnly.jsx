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
            <div>
                Hello, Admin!
            </div>
        ) : (
            <div>
                No entry, Admins only!
            </div>
        )}
        </Container>
        </>
    )
}

export default AdminsOnly