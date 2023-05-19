import { Container, Col, Row, Form, Button, Modal, ListGroup, ListGroupItem } from "react-bootstrap"
import { getUsers } from "../../redux/actions/index.js"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { MdOutlinePhotoCamera } from "react-icons/md";
import NavbarComponent from "../../components/NavbarComponent.jsx";
import "../../assets/handleUsers.css"

const HandleUsers = ({ user }) => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

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

    const [newFirstName, setNewFirstName] = useState(user?.firstName || '');
    const [newLastName, setNewLastName] = useState(user?.lastName || '');
    const [newImage, setNewImage] = useState(user?.image || '');
    const [newEmail, setNewEmail] = useState(user?.email || '');
    const [newRole, setNewRole] = useState(user?.role || '')

    const [selectedUser, setSelectedUser] = useState(null);

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = (user) => {
        setSelectedUser(user);
        setShow(true);
    }

    const accessToken = localStorage.getItem("accessToken");
    const _id = localStorage.getItem("_id");

    const updateUser = async () => {
        const updatedUser = {
            firstName: newFirstName,
            lastName: newLastName,
            email: newEmail,
            role: newRole,
            _id: selectedUser._id,
        };
        try { console.log("access token: ", accessToken)
            let res = await fetch(`${process.env.REACT_APP_BE_URL}/users/${selectedUser._id}`, {
                method: "PUT",
                body: JSON.stringify(updatedUser),
                headers:
                {
                    Authorization: "Bearer " + accessToken,
                    "Content-Type": "application/json",
                  },
            });
            if (res.ok) {
                const response = await res.json();
                const newUsers = await getUsers(accessToken) 
                setUsers(newUsers)               
                // localStorage.setItem("accessToken", response.accessToken)
                handleClose()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <NavbarComponent />
        <Modal className="modal-text" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title className="modal-title" ><h1>Update User</h1></Modal.Title>
            </Modal.Header>

            <Modal.Body>

            <Form>
                <Form.Group>
                <Form.Label className="listgroup-text"><h4>User's new name:</h4></Form.Label>
                <Form.Control className="listgroup-text"
                    value={newFirstName}
                    onChange={(e) => setNewFirstName(e.target.value)}
                />
                </Form.Group>

                <Form.Group>
                <Form.Label className="listgroup-text"><h4>User's new last name:</h4></Form.Label>
                <Form.Control className="listgroup-text"
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)}
                />
                </Form.Group>

                <Form.Group>
                <Form.Label className="listgroup-text"><h4>User's new email address:</h4></Form.Label>
                <Form.Control className="listgroup-text"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
                </Form.Group>

                <Form.Group>
                <Form.Label className="listgroup-text"><h4>User's new role:</h4></Form.Label>
                <Form.Control className="listgroup-text"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                />
                </Form.Group>

                {/* <Form.Group>
                <Form.Label><h4>User's new image:</h4></Form.Label>
                <MdOutlinePhotoCamera /><input className="input" type="file" onChange={changeImage}></input>
                </Form.Group> */}
            </Form>

            </Modal.Body>

            <Modal.Footer>
            <Button className="close-modal-btn" onClick={handleClose}>
                Close
            </Button>
            <Button className="saveChanges-btn" onClick={() => updateUser()}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>


        <Container>
            <div className="handleUsers-title">
            <h1>Handle Users</h1>
            {isLoading && <p>Loading...</p>}
            <h2>List of users:</h2>
            </div>
            {!isLoading && users.length > 0 ? (
                users.map(user => (
                <Col key={user._id}>
                    <ListGroup  variant="flush">
                    <Row className="list-of-users-wrapper">
                    <ListGroup.Item className="list-of-users listgroup-text">{user.firstName} {user.lastName}</ListGroup.Item>
                    <ListGroup.Item className="list-of-users listgroup-text">{user.email}</ListGroup.Item>
                    <ListGroup.Item className="list-of-users listgroup-text">Role: {user.role}</ListGroup.Item>
                    <Button className="action-btn" onClick={() => handleShow(user)}>Action</Button>
                    </Row>
                    </ListGroup>
                </Col>
            ))) : null }
          </Container>
        </>
    )
}

export default HandleUsers