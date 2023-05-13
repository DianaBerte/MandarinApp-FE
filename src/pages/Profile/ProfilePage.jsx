import { Col, Container, Row, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/actions/index.js";
import { getUsers } from "../../redux/actions/index.js";

const UserProfile = (  ) => {

   

    let currentUserInfo = useSelector((state) => state.currentUser)

    const [newUsername, setNewUsername] = useState(currentUserInfo.firstName);

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [imageUrl, setImageUrl] = useState('');

    const dispatch = useDispatch()

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Here I can send the updated details to the server
    // }

    // const handleImageChange = (event) => {
    //     const { value } = event.target;
    //     setImageUrl(value);
    //   };

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return(
        <>
        <Container>
            <h1>hello, {currentUserInfo.firstName}</h1>
            {/* <Row>
                <Col>
                    <div>
                        <h1>你好! Nihao!</h1>
                    </div>
                    <div className="profile-img-wrapper">
                        <img
                            src={"https://res.cloudinary.com/degg5zebq/image/upload/v1683820402/UserImgPlaceholder_b9lgbn.png"}
                            className="h-50 rounded-circle profile-img"
                            alt="Profile img"
                            // onClick={() => {
                            // setShowPPModal(true);
                            // }}
                        />
                    </div>            

                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="image">
                            <Form.Control
                                type="text"
                                placeholder="Enter image URL"
                                value={imageUrl}
                                onChange={handleImageChange}
                            />
                            </Form.Group>
                        </Form>
                
                    <div>
                    <h5>Edit Profile</h5>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={""} 
                                onChange={(event) => setName(event.target.value)}
                            />
                            </Form.Group>

                            <Form.Group controlId="formSurname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={""} 
                                onChange={(event) => setSurname(event.target.value)}
                            />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                value={email} 
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            </Form.Group>

                            <Button className="check-btn" type="submit">
                            Save
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row> */}
        </Container>
        </>
    )
}

export default UserProfile