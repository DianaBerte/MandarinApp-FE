import { Container, Col, Row, Form, Button, Modal, ListGroup, ListGroupItem } from "react-bootstrap"
import { getUsers } from "../../redux/actions/index.js"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { MdOutlinePhotoCamera } from "react-icons/md";

const HandleUsers = ({ user }) => {

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

    const [newFirstName, setNewFirstName] = useState(user?.firstName || '');
    const [newLastName, setNewLastName] = useState(user?.lastName || '');
    const [newImage, setNewImage] = useState(user?.image || '');
    const [newEmail, setNewEmail] = useState(user?.email || '');
    const [newRole, setNewRole] = useState(user?.role || '')

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const accessToken = localStorage.getItem("accessToken");

    // const updateUser = async () => {
    //     const updatedUser = {
    //         firstName: newFirstName,
    //         lastName: newLastName,
    //         email: newEmail,
    //         role: newRole,
    //         _id: user._id,
    //     };
    //     try { console.log("Hellooo")
    //         let res = await fetch(`${process.env.REACT_APP_BE_URL}/users/${user._id}`, {
    //             method: "PUT",
    //             body: JSON.stringify(updatedUser),
    //             headers:
    //             {
    //                 Authorization: `Bearer ${accessToken}`,
    //                 "Content-Type": "application/json",
    //               },
    //         });
    //         if (res.ok) {
    //             const response = await res.json();
    //             dispatch(getUsers(response))
    //             handleClose()
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return(
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title className="modal-title" ><h1>Update User</h1></Modal.Title>
            </Modal.Header>

            <Modal.Body>

            <Form>
                <Form.Group>
                <Form.Label><h4>User's new name:</h4></Form.Label>
                <Form.Control
                    value={newFirstName}
                    onChange={(e) => setNewFirstName(e.target.value)}
                />
                </Form.Group>

                <Form.Group>
                <Form.Label><h4>User's new last name:</h4></Form.Label>
                <Form.Control
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)}
                />
                </Form.Group>

                <Form.Group>
                <Form.Label><h4>User's new email address:</h4></Form.Label>
                <Form.Control
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
                </Form.Group>

                <Form.Group>
                <Form.Label><h4>User's new role:</h4></Form.Label>
                <Form.Control
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
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            {/* <Button variant="primary" onClick={() => updateUser({_id: user._id})}>
                Save Changes
            </Button> */}
            </Modal.Footer>
        </Modal>


        <Container>
            <div>
            <h1>Handle Users</h1>
            < HandleUsers user={user} />
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
                    <Button onClick={handleShow}>Action</Button>
                    </Row>
                    </ListGroup>
                </Col>
            ))) : null }
          </Container>
        </>
    )
}

export default HandleUsers