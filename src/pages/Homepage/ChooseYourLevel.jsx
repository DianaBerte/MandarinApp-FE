import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const ChooseYourLevel = () => {

    const navigate = useNavigate()

    return(
        <>
        <h1>Choose Your Level</h1>
        <Button onClick={() => navigate("/start/beginner")}>
            Beginner</Button>
        <Button onClick={() => navigate("/start/intermediate")}>
            Intermediate</Button>
        <Button onClick={() => navigate("/start/advanced")}>
            Advanced</Button>
        </>
    )
}

export default ChooseYourLevel