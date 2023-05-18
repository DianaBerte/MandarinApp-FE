import { Button, Col, Row, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import NavbarComponent from "../../components/NavbarComponent"
import "../../assets/chooseLevel.css"

const ChooseYourLevel = () => {

    const navigate = useNavigate()

    return(
        <>
        <NavbarComponent />
        <Container>
        <Col>
            <div className="choose-level-title-wrapper">
            <h1>Choose Your Level</h1>
            </div>
        
            <Row className="levels-container">

            <Col col="10" md="4">
            <div className="beginner-wrapper text-center">
                <img className="beginner" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684427571/ChineseLantern_1_fvzufh.png" alt="Chinese lantern" />
                <Button className="level-btn" onClick={() => navigate("/start/beginner")}>
                Beginner</Button>
            </div>
            </Col>

            <Col col="10" md="4">
            <div className="interm-wrapper text-center">
                <img className="interm" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684425811/ChineseFan_rebc0x.png" alt="Chinese fan"/>
                <Button className="level-btn" onClick={() => navigate("/start/intermediate")}>
                Intermediate</Button>
            </div>
            </Col>
            
            <Col col="10" md="4">
            <div className="adv-wrapper text-center">
                <img className="advanced" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684427571/LevelDragon_1_qmimfk.png" alt="Chinese dragon" />
                <Button className="level-btn" onClick={() => navigate("/start/advanced")}>
                Advanced</Button>
            </div>
            </Col>

            </Row>

        </Col>
        </Container>
        </>
    )
}

export default ChooseYourLevel