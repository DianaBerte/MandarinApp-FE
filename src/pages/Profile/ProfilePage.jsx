import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getCurrentUser, updateUser } from "../../redux/actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import { useActionData } from "react-router-dom";

const UserProfile = () => {

    const dispatch = useDispatch();

    let currentUser = useSelector((state) => state.users.currentUser)
    const [editProfileObj, setEditPtofileObj] = useState({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        image: "",
    })

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        dispatch(getCurrentUser(id));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateUser(editProfileObj, currentUser, image));
    }

    const handleImageChange = (event) => {
        const { value } = event.target;
        setImageUrl(value);
      };

    return(
        <>
        <Container>
            <Row>
                <Col>
                    <div>
                        <h1>你好! Nihao!</h1>
                    </div>
                    <h5>HELLO, {currentUser.firstName} - {currentUser.lastName}, {currentUser.role}</h5>
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
            </Row>
        </Container>
        </>
    )
}

export default UserProfile