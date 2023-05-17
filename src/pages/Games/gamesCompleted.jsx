import { Container, Col, Row } from "react-bootstrap";

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
// console.log("currentUser in gamesCompleted: ", currentUser)

const GamesCompleted = () => {
    return(
        <>
        <Container>
            <Col>
            <Row>
                <h1>Nihao, {currentUser.firstName}!</h1>
                <h1>Score: {currentUser.quizAnswers}</h1>
            </Row>
            </Col>
        </Container>
        </>
    )
}

export default GamesCompleted