import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const ChooseYourLevel = () => {

    const navigate = useNavigate()

    return(
        <>
        <h1>Choose Your Level</h1>
        <Button onClick={() => navigate("/start")}>
            Beginner</Button>
        <Button onClick={() => navigate("/start")}>
            Intermediate</Button>
        <Button onClick={() => navigate("/start")}>
            Advanced</Button>
        </>
    )
}

export default ChooseYourLevel