import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { useSelector } from "react-redux"
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

    let currentUser = useSelector((state) => state.currentUser.currentUser)
    console.log("Hello: ", currentUser)

    return(
        <>
        <NavbarComponent />

        <Container className="first-home-container">
            <Row>
            <div className="cloud-wrapper">
                <img className="cloud" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684424562/Untitled_design_2_tj6xty.png" alt="cloud" />
            </div>
            </Row>
        </Container>

        <Container className="first-home-container">
            <Row>
            <div className="temple-wrapper">
                <img className="temple" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684417100/Untitled_design_munqlw.png" />
            </div>
            </Row>
        </Container>
   
        

        <Container className="home-container">        
        <Row>
            <Col col="10" md="6"  >
                    <Button className="choose-n-start-btn" onClick={() => navigate("/ChooseYourLevel")}
                    >Choose your level & Start!
                    </Button>
            </Col>

                {/* <Col col="4" md="6" xs="2">
                    <div className="riverli-wrapper">
                        <img className="riverLi" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684416686/River_Li_p7a6zo.png" alt="River Li" />
                    </div>
                </Col> */}
        </Row>
        </Container>

        <Col >
            <div className="home-bamboo-wrapper">
                <img className="home-bamboo" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684511851/Bamboo_1_s5isiv.png" />
            </div>
        </Col>

        <Col >
            <div className="riverli-wrapper">
                <img className="riverLi" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684416686/River_Li_p7a6zo.png" alt="River Li" />
            </div>
        </Col>

        </>
    )
}

export default Homepage