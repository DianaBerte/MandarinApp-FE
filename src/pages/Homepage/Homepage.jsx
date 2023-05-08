import { Button, Container } from "react-bootstrap"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react"

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
        <Container>
        {/* only after user's logged in or signed up appears Start Game btn */}
        <Button onClick={() => navigate("/ChooseYourLevel")}
        >Choose your level & Start!</Button>
        </Container>
        </>
    )
}

export default Homepage