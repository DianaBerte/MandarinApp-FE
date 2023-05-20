import { Container, Button, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchBegSecond } from "../../../redux/actions/index.js";
import RightAnswerModal from "../../../components/RightAnswerModal.jsx";
import WrongAnswerModal from "../../../components/WrongAnswerModal.jsx";
import NavbarComponent from "../../../components/NavbarComponent.jsx";
import "../../../assets/games.css"

const GameTwo = () => {

    const navigate = useNavigate();

    let [currentGameIndex, setCurrentGameIndex] = useState(5); //stores the index of the current game being displayed
    let [currentGame, setCurrentGame] = useState({}); //stores the game object
    let [showRightAnsModal, setShowRightAnsModal] = useState(false);
    let [showWrongAns, setShowWrongAns] = useState(false);
    let [selectedAnswer, setSelectedAnswer] = useState(null)

    const games = useSelector((state) => {
        console.log("Working: return state.currentGame in gameTwo")
        return state.currentGame;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBegSecond());
        setCurrentGame(games[currentGameIndex]) //setting the initial value of "game" to the first game in the list
        console.log("Working: dispatch(fetchBegSecond) in gameTwo")  
    }, [])

    const nextExercise = async () => {     
        try {

            let currentUser = JSON.parse(localStorage.getItem("currentUser"));
            if (!currentUser) {
                currentUser = {quizAnswers: []};
            }
            if (selectedAnswer === currentGame.answers[0].correctAnswer) {
                currentUser.quizAnswers.push(selectedAnswer);
                localStorage.setItem("currentUser", JSON.stringify(currentUser));
            }
            
            if (currentGameIndex < games.length - 1) { //checking if there are more games in the list and updating the state accordingly 
                setCurrentGameIndex(currentGameIndex + 1);
                setCurrentGame(games[currentGameIndex + 1]);
                console.log("Working: nextExercise() in gameTwo")   
            } else {
                setTimeout(() => {
                    navigate(`/games/beginner/third`);
                }, 2000);
            }
        } catch (error) {
            console.log(error)  
        }
    };

    useEffect(() => { //runs every time the "games" or "currentGameIndex" state changes, and updates the "currentGame" state to be the correct object based on the current index
        setCurrentGame(games[currentGameIndex]);
    }, [games, currentGameIndex]); 

    return(
        <>
        <NavbarComponent />

        <Col col="2" md="4" sm="10">
            <div className="frame-wrapper">
                <img className="frameRight" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684510098/Frame_left_l2sqav.png" alt="" />
            </div>
        </Col>

        <Container>
            <div className="container-div">
                <div><h1>Match the pairs!</h1></div>
                <div className="game-container">
                    <div className="left-title"><h5></h5></div>
                    <div className="left-column">
                        <p className="pinyin">{currentGame.question}</p>
                    </div>
                    <div className="right-title"><h5></h5></div>
                    <div className="right-column">
                            {currentGame.answers && currentGame.answers.length > 0 //checking if the object "currentGame" has a property called "answers" and if it has elements in its "answers" array
                                && currentGame.answers[0].answers.map((ans) => ( //If condition is met, it maps through the first element in the "answers" array and renders button with chars
                                    <button className="chars-btn" onClick={() => {
                                        setSelectedAnswer(ans);
                                    }}key={ans}>{ans}</button>
                                ))} {/* Else, it should render a button to the next page */}
                    </div>
                </div> 

                <div className="btn-wrapper">                                
                    <Button className="check-btn" onClick={() => {
                        if(selectedAnswer === currentGame.answers[0].correctAnswer) {
                             setShowRightAnsModal(true);
                             setTimeout(() => {
                                setShowRightAnsModal(false);
                            }, 2000);
                            nextExercise()
                        } else {
                            setShowWrongAns(true);
                            setTimeout(() => {
                                setShowWrongAns(false);
                            }, 2000);
                            nextExercise()
                        }
                        }}key={selectedAnswer}>Check
                    </ Button>
                </div>

                {/* <div className="btn-wrapper">
                    <Button className="next-btn" onClick={nextExercise}> 
                      Next
                    </Button>
                </div> */}
            </div>
        </Container>

        <Col >
            <div className="bamboo-wrapper">
                <img className="bamboo" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684511851/Bamboo_1_s5isiv.png" alt="" />
            </div>
        </Col>
        
        <RightAnswerModal show={showRightAnsModal} onHide={() => setShowRightAnsModal(false)} />
        <WrongAnswerModal show={showWrongAns} onHide={() => setShowWrongAns(false)}/>
        </>
    )
}

export default GameTwo