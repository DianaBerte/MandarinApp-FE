import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavbarComponent from "../../components/NavbarComponent.jsx";
import { Container, Col } from "react-bootstrap";
import "../../assets/completedGames.css"

// const currentUser = JSON.parse(localStorage.getItem("currentUser"));
// localStorage.setItem("currentUser", JSON.stringify(currentUser));


const countAnswers = (arr) => {
    let count = 0;
    arr.forEach((item) => {
        if (typeof item === "string") {
            count++;
        }
    });
    return count;
}

const GamesCompleted = () => {

    const [stringCount, setStringCount] = useState(0);
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let currentUserInfo = useSelector((state) => state.currentUser.currentUser)
    const myArray = currentUser.quizAnswers || [];

    useEffect(() => {
        const count = countAnswers(myArray);
        setStringCount(count)
    }, []);

    return(
        <>
        <NavbarComponent />

        <Col col="2" md="4" sm="10">
            <div className="gamesCompleted-frame-wrapper">
                <img className="gamesCompleted-frameRight" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684417100/Untitled_design_munqlw.png" />
            </div>
        </Col>

        <Container className="finalScore-container">
            <div className="correct-answers-div">   
                <h1>{currentUserInfo.firstName}, your final score is 
                    <span className="correct-answers-span">
                        <img className="score-frame" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684577470/Final_score_frame_xiwg2q.png" /> <span className="stringCount"> {stringCount}</span></span> correct answers out of 15!
                </h1>
            </div>
        </Container>

        <Col >
            <div className="gamesCompleted-bamboo-wrapper">
                <img className="gamesCompleted-bamboo" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684578213/Lanterns_right_c0qrmp.png" />
            </div>
        </Col>

        </>
    )
}

export default GamesCompleted