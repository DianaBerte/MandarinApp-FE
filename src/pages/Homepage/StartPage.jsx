import { useState, useRef, useEffect } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import NavbarComponent from "../../components/NavbarComponent";
import "../../assets/ready.css"

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
                navigate(`/games/${level}`); //dynamic route based on the chosen difficulty level 
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
        <Container className="ready-container">
           
            <Button className="ready-btn" onClick={ready}>Ready?</Button>


            <Row className="timer-container">
                <Col col="10" md="4">
                    <div className="timer"><h1>{timer}</h1></div>
                    
                </Col>
            </Row>
            {timerEnded &&<h1 className="go">开始!</h1>}

        </Container>  
        <Container className="ready-container" >
                <img className="chineseArt" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684501360/ChineseArt_wsm6fm.png" alt="Chinese painting" />
        </Container>      
        </>
    )
}

export default StartPage