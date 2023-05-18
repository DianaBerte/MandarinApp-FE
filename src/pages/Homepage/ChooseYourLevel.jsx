import { Button, Col, Row, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import NavbarComponent from "../../components/NavbarComponent"

const ChooseYourLevel = () => {

    const navigate = useNavigate()

    return(
        <>
        <NavbarComponent />
        <Container>
            <Col>
            <div>
        <h1>Choose Your Level</h1>
        <Button onClick={() => navigate("/start/beginner")}>
            Beginner</Button>
        <Button onClick={() => navigate("/start/intermediate")}>
            Intermediate</Button>
        <Button onClick={() => navigate("/start/advanced")}>
            Advanced</Button>
            </div>
            </Col>
            </Container>
        </>
    )
}

export default ChooseYourLevel