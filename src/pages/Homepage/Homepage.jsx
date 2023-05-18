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
        <Col col="4" md="3">
                    <div className="cloud-wrapper">
                        <img className="cloud" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684424562/Untitled_design_2_tj6xty.png" alt="cloud" />
                    </div>
        </Col>
        
        <Container className=" home-container">        
        <Row>
            <Col col="10" md="6">
                    <Button className="choose-n-start-btn" onClick={() => navigate("/ChooseYourLevel")}
                    >Choose your level & Start!
                    </Button>
            </Col>

                <Col col="4" md="6">
                    <div className="riverli-wrapper">
                        <img className="riverLi" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684416686/River_Li_p7a6zo.png" alt="River Li" />
                    </div>
                </Col>
   

        </Row>
        </Container>
        </>
    )
}

export default Homepage