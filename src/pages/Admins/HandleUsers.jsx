import { Container, Col, Row, Form, Button, Modal, ListGroup } from "react-bootstrap"
import { getUsers } from "../../redux/actions/index.js"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

const HandleUsers = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getUsers();
            if (response) {
                setUsers(response);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return(
        <Container>
            {isLoading && <p>Loading...</p>}
            {!isLoading && users.length > 0 ? (
                users.map(user => (
                <div key={user._id}>
                    <h3>{user.firstName} {user.lastName} | {user.email} | Role: {user.role}</h3>
                </div>
            ))) : null }
          </Container>
        // {/* <Container>
        //     <h1>Handle Users</h1>
        //     {isLoading ? (
        //         <h3>Loading...</h3>
        //     ) : (
        //         <>
        //         <ListGroup variant="flush">
        //             <ListGroup.Item className="listgroup-text">Name</ListGroup.Item>
        //             <ListGroup.Item className="listgroup-text">Email Address</ListGroup.Item>
        //             <ListGroup.Item className="listgroup-text">Action</ListGroup.Item>
        //         </ListGroup>

        //         <ListGroup>
        //             {users.map(user => (
        //                 <>
        //                 <ListGroup.Item key={user.id} className="listgroup-text">{user.firstName}{user.lastName}</ListGroup.Item>
        //                 <ListGroup.Item className="listgroup-text">{user.email}</ListGroup.Item>
        //                 </>
        //             ))}
        //         </ListGroup>
        //         </>
        //     )}
        //     <Col>
        //     <Row>

        //     </Row>
        //     </Col>
        // </Container> */}

    )
}

export default HandleUsers