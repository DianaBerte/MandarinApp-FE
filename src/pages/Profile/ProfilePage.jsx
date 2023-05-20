import { Col, Container, Row, Form, Button, Modal, ListGroup } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi"
import { MdOutlinePhotoCamera } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/actions/index.js";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../../components/NavbarComponent.jsx";
import "../../assets/account.css"

const UserProfile = () => {

    let currentUserInfo = useSelector((state) => state.currentUser.currentUser)

    const [newFirstName, setNewFirstName] = useState(currentUserInfo.firstName);
    const [newLastName, setNewLastName] = useState(currentUserInfo.lastName);
    const [newImage, setNewImage] = useState(currentUserInfo.image);
    const [newEmail, setNewEmail] = useState(currentUserInfo.email);

    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const accessToken = localStorage.getItem("accessToken");

    const changeImage = async (event) => {
        try {
            const file = event.target.files?.[0];
            const formData = new FormData();
            formData.append("image", file);
            let res = await fetch(`${process.env.REACT_APP_BE_URL}/users/me/image`, {
                method: "POST",
                body: formData,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });
            if (res.ok) {
                const updatedUser = await res.json();
                dispatch(setCurrentUser(updatedUser.user))
                const finallyUpdatedUser = {...currentUserInfo, image: updatedUser.user.image};
                dispatch(setCurrentUser(finallyUpdatedUser));
                updateUserInfo();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateUserInfo = async () => {
        const updatedUser = {
            firstName: newFirstName,
            lastName: newLastName,
            email: newEmail
        };
        try { console.log("updatedUser: ", updatedUser)
            let res = await fetch(`${process.env.REACT_APP_BE_URL}/users/me`, {
                method: "PUT",
                body: JSON.stringify(updatedUser),
                headers:
                {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                  },
            });
            if (res.ok) {
                const response = await res.json()
                dispatch(setCurrentUser(response))
                handleClose()
            }
        } catch (error) {
            console.log(error)
        }
    };

    const logout = () => {
        const emptyUser = {
            _id: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            role: "",
            googleId: "",
            quizAnswers: [],
            image: "",
        };
        localStorage.removeItem("accessToken");
        dispatch(setCurrentUser(emptyUser));
        navigate("/")
    }

    return(
        <>
        <NavbarComponent />
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title className="modal-title" ><h1>Update profile</h1></Modal.Title>
            </Modal.Header>

            <Modal.Body>

            <Form>
                <Form.Group>
                <Form.Label className="listgroup-text"><h4>Your new name:</h4></Form.Label>
                <Form.Control className="listgroup-text"
                    value={newFirstName}
                    onChange={(e) => setNewFirstName(e.target.value)}
                />
                </Form.Group>

                <Form.Group>
                <Form.Label className="listgroup-text"><h4>Your new last name:</h4></Form.Label>
                <Form.Control className="listgroup-text"
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)}
                />
                </Form.Group>

                <Form.Group>
                <Form.Label className="listgroup-text"><h4>Your new email address:</h4></Form.Label>
                <Form.Control className="listgroup-text"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
                </Form.Group>

                <Form.Group>
                <Form.Label className="listgroup-text"><h4>Your new image:</h4></Form.Label>
                <MdOutlinePhotoCamera /><input className="input" type="file" onChange={changeImage}></input>
                </Form.Group>
            </Form>

            </Modal.Body>

            <Modal.Footer>
            <Button className="close-modal-btn" variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button className="saveChanges-btn" variant="primary" onClick={updateUserInfo}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>

        <Container className="profile-container">

            <Col>
                <div className="profile-title-wrapper">
                <h1>Nihao, {currentUserInfo.firstName}!</h1>
                </div>
            
        <Row className="profile-info-container">

            <Col col="10" md="4">
                <div className="profile-img-wrapper">
                    <img className="profile-img" src={currentUserInfo.image} alt="User Profile Image" />
                </div>
            </Col>

            <Col>
                <div className="profile-form-wrapper">
                    <ListGroup className="profile-form" variant="flush">
                        <ListGroup.Item className="profile-listgroup-text">Name: {currentUserInfo.firstName} {currentUserInfo.lastName}</ListGroup.Item>
                        <ListGroup.Item className="profile-listgroup-text">Email Address: {currentUserInfo.email}</ListGroup.Item>
                        <ListGroup.Item className="profile-listgroup-text">Role: {currentUserInfo.role}</ListGroup.Item>
                    </ListGroup>
                    <button className="edit-profile-btn" onClick={handleShow}>
                    <h3>Edit Profile</h3>
                    </button>
                </div>
            </Col>

            </Row>

            <div className="logout-btn-wrapper">
            <button className="logout-btn" onClick={logout}>Log out < FiLogOut/> </button>
            </div>

            </Col>
        </Container>
        
        <div className="bottom-frame-wrapper">
                <img className="bottom-frame" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684578846/Frame_bottom_left_ncigql.png" alt="Frame" />
        </div>

        </>
    )
}

export default UserProfile