import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import NavbarComponent from "../../components/NavbarComponent.jsx"
import "../../assets/home.css"

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
        <NavbarComponent />
        <Container className="first-home-container">
            <Col>
            <div className="cloud-wrapper">
                <img className="cloud" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684424562/Untitled_design_2_tj6xty.png" alt="cloud" />
            </div>

            <Row>

                <Col col="10" md="4">
                    <div className="temple-wrapper">
                        <img className="temple" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684417100/Untitled_design_munqlw.png" />
                    </div>
                </Col>

                <Col col="10" md="4"  >
                        <Button className="choose-n-start-btn" onClick={() => navigate("/ChooseYourLevel")}
                        >Choose your level & Start!
                        </Button>
                </Col>

                <Col col="10" md="4">
                    <div className="home-bamboo-wrapper">
                        <img className="home-bamboo" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684511851/Bamboo_1_s5isiv.png" />
                    </div>
                </Col>

                <Col col="10" md="4">
                    <div className="riverli-wrapper">
                        <img className="riverLi" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684416686/River_Li_p7a6zo.png" alt="River Li" />
                    </div>
                </Col>

            </Row>
            </Col>
        </Container>
        </>
    )
}

export default Homepage