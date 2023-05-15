import { Container, Col, Row, Form, Button, Modal, ListGroup, ListGroupItem } from "react-bootstrap"
import { getUsers } from "../../redux/actions/index.js"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

const HandleUsers = (user) => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const accessToken = localStorage.getItem("accessToken");
            const response = await getUsers(accessToken);
            if (response) {
                setUsers(response);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const [newFirstName, setNewFirstName] = useState(user.firstName);
    const [newLastName, setNewLastName] = useState(user.lastName);
    const [newImage, setNewImage] = useState(user.image);
    const [newEmail, setNewEmail] = useState(user.email);
    const [newRole, setNewRole] = useState(user.role)

    const updateUser = async () => {
        const updatedUser = {
            firstName: newFirstName,
            lastName: newLastName,
            email: newEmail,
            role: newRole,
        };
        try {
            let res = await fetch(`${process.env.REACT_APP_BE_URL}/users/${id}`)
        } catch (error) {
            
        }
    }

    return(
        <Container>
            <div>
            <h1>Handle Users</h1>
            {isLoading && <p>Loading...</p>}
            <h2>List of users:</h2>
            </div>
            {!isLoading && users.length > 0 ? (
                users.map(user => (
                <Col key={user._id}>
                    <ListGroup variant="flush">
                    <Row>
                    <ListGroup.Item className="listgroup-text">{user.firstName} {user.lastName}</ListGroup.Item>
                    <ListGroup.Item className="listgroup-text">{user.email}</ListGroup.Item>
                    <ListGroup.Item className="listgroup-text">Role: {user.role}</ListGroup.Item>
                    <Button>Action</Button>
                    </Row>
                    </ListGroup>
                </Col>
            ))) : null }
          </Container>
    )
}

export default HandleUsers