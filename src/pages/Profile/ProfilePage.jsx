import { Col, Container, Row, Form, Button, Modal, ListGroup } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi"
import { MdOutlinePhotoCamera } from "react-icons/md";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/actions/index.js";
import { getUsers } from "../../redux/actions/index.js";
import { useNavigate } from "react-router-dom";

const UserProfile = (  ) => {

    let currentUserInfo = useSelector((state) => state.currentUser.currentUser)

    const [newFirstName, setNewFirstName] = useState(currentUserInfo.firstName);
    const [newLastName, setNewLastName] = useState(currentUserInfo.lastName);
    const [newImage, setNewImage] = useState(currentUserInfo.image);
    const [newEmail, setNewEmail] = useState(currentUserInfo.email);
    const [newPW, setNewPW] = useState(currentUserInfo.password);

    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const accessToken = localStorage.getItem("accessToken");

    const changeImage = async (event) => {
        try {
            console.log("hello")
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
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateUserInfo = async () => {
        const updatedUser = {
            firstName: newFirstName,
            lastName: newLastName,
            email: newEmail,
            password: newPW,
        };
        try {
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
            quizAnswers: "",
            image: "",
        };
        localStorage.removeItem("accessToken");
        dispatch(setCurrentUser(emptyUser));
        navigate("/")
    }

    return(
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title className="modal-title" ><h1>Update profile</h1></Modal.Title>
            </Modal.Header>

            <Modal.Body>

            <Form>
                <Form.Group>
                <Form.Label><h4>Your new name:</h4></Form.Label>
                <Form.Control
                    value={newFirstName}
                    onChange={(e) => setNewFirstName(e.target.value)}
                />
                </Form.Group>

                <Form.Group>
                <Form.Label><h4>Your new last name:</h4></Form.Label>
                <Form.Control
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)}
                />
                </Form.Group>

                <Form.Group>
                <Form.Label><h4>Your new email address:</h4></Form.Label>
                <Form.Control
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
                </Form.Group>
            </Form>

            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={updateUserInfo}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>

        <Container>
            <Col>
            <Row>
            <h1>Nihao, {currentUserInfo.firstName}!</h1>
            </Row>
            <Row>

                <div className="profile-img-wrapper">
                    <img className="profile-img" src={currentUserInfo.image} alt="User Profile Image" />
                </div>
                <label className="change-user-image">
                    {""}
                    <MdOutlinePhotoCamera />
                    <input className="input" type="file" onChange={changeImage}></input>
                </label>

                <div className="form">
                <div>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="listgroup-text">{currentUserInfo.firstName} {currentUserInfo.lastName}</ListGroup.Item>
                        <ListGroup.Item className="listgroup-text">{currentUserInfo.email}</ListGroup.Item>
                    </ListGroup>
                    <button onClick={handleShow}>
                    <h3>Edit Profile</h3>
                    </button>
                </div>
                </div>
            </Row>
            </Col>
            
            <Col>
            <Row>
            <button onClick={logout}>Log out < FiLogOut/> </button>
            </Row>
            </Col>
        </Container>
        </>
    )
}

export default UserProfile