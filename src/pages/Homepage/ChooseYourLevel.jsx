import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const ChooseYourLevel = () => {

    const navigate = useNavigate()

    return(
        <>
        <h1>Choose Your Level</h1>
        <Button onClick={() => navigate("/GamePage/Beginner/first")}>
            Beginner</Button>
        <h3>Intermediate</h3>
        <h3>Advanced</h3>
        </>
    )
}

export default ChooseYourLevel