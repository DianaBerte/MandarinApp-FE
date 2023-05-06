import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Homepage = () => {

    const navigate = useNavigate()

    return(
        <>
        <Container>
        <Button>Log in</Button>
        <Button>Sign up</Button>
        {/* only after user's logged in or signed up appears Start Game btn */}
        <Button onClick={() => navigate("/ChooseYourLevel")}
        >Choose your level & Start!</Button>
        </Container>
        </>
    )
}

export default Homepage