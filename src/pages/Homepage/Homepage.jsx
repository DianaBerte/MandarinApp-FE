import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import RiverLi from "../../assets/img/RiverLi.png"


const Homepage = () => {

    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("accessToken")) navigate("/login")
        if (searchParams.get("accessToken")) {
            localStorage.setItem("accessToken", searchParams.get("accessToken"))
            navigate("/")
        }
    }, [navigate, searchParams])

    return(
        <>
        <Container fluid className="p-5 my-5">
            <Row>
                <Col col="10" md="6">
                    <Button onClick={() => navigate("/ChooseYourLevel")}
                    >Choose your level & Start!
                    </Button>
                </Col>
                <Col>
                <Row>
                    <img className="riverLi" src={RiverLi} alt="River Li" />
                </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Homepage