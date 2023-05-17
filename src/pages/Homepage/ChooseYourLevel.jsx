import { Button, Container, Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const ChooseYourLevel = () => {

    const navigate = useNavigate()
    const currentUserInfo = useSelector((state) => state.currentUser.currentUser)
    console.log("current user in ChooseYourLevel: ", currentUserInfo)

    return(
        <>
        <Container>
            <Col>
                <Row>
                    <h1>Nihao, {currentUserInfo.firstName}!</h1>
                </Row>
                <Row>
                    <h1>Choose Your Level:</h1>
                </Row>
            </Col>

            <Col>
            <Row>
                <Button onClick={() => navigate("/start/beginner")}>
                    Beginner</Button>

                <Button onClick={() => navigate("/start/intermediate")}>
                    Intermediate</Button>           

                <Button onClick={() => navigate("/start/advanced")}>
                    Advanced</Button>
            </Row>
            </Col>
        </Container>
        </>
    )
}

export default ChooseYourLevel