import { useState, useRef, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import NavbarComponent from "../../components/NavbarComponent";

const StartPage = () => {
    
    const { level } = useParams()
    
    const Ref = useRef(null);
    const navigate = useNavigate()

    const [timer, setTimer] = useState('00');
    const [timerEnded, setTimerEnded] = useState(false);

    const getRemainingTime = (e) => {
    const total = Date.parse(e) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60);
    return {
        total, seconds
    };
    }

    const startTimer = (e) => {
        let {total, seconds}
        = getRemainingTime(e);
        if (total >=0 ){
            setTimer(
                (seconds > 3 ? seconds : "0" + seconds)
            )
            if (total === 0) {
                setTimerEnded(true);
            }
        }
    }

    const clearTimer = (e) => {
        setTimer("03");
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 3);
        return deadline;
    }

    useEffect(() => {
        if (timerEnded) {
            const id = setTimeout(() => {
                navigate(`/games/${level}`); //this should be a dynamic route based on the difficulty level chosen
            }, 1000)
            return() => clearTimeout(id);
        }
    }, [timerEnded, navigate])

    const ready = () => {
        clearTimer(getDeadTime())
    }

    return(
        <>
        <NavbarComponent />
        <Container>
        <Button onClick={ready}>Ready?</Button>
        <h2>{timer}</h2>
        {timerEnded && <h1>Go!</h1> }
        </Container>
        </>
    )
}

export default StartPage