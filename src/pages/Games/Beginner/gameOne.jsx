import { Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchGames } from "../../../redux/actions/index.js";
import RightAnswerModal from "../../../components/RightAnswerModal.jsx";
import WrongAnswerModal from "../../../components/WrongAnswerModal.jsx";

const GameOne = () => {

    const {level} = useParams();
    const {number} = useParams();
    const navigate = useNavigate();

    let [currentGameIndex, setCurrentGameIndex] = useState(0); //stores the index of the current game beong displayed
    let [currentGame, setCurrentGame] = useState({}); //stores the game object
    let [showRightAnsModal, setShowRightAnsModal] = useState(false);
    let [showWrongAns, setShowWrongAns] = useState(false);
    let [selectedAnswer, setSelectedAnswer] = useState(null)

    const games = useSelector((state) => {
        return state.currentGame;
    });
 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGames(level, number));
        setCurrentGame(games[currentGameIndex]) //setting the initial value of "game" to the first game in the list
    }, [])

    const nextExercise = async () => {    
        console.log("Working: gameOne nextExercise()")      
        try {
            if (currentGameIndex < games.length - 1) { //checking if there are more games in the list and updating the state accordingly 
                setCurrentGameIndex(currentGameIndex + 1);
                setCurrentGame(games[currentGameIndex + 1]);
            } else {
                if (level === "beginner") {
                    navigate(`/games/beginner/second`)}
                if (level === "intermediate") {
                    navigate(`/games/intermediate/second`)}
                if (level === "advanced") {
                    navigate(`/games/advanced/second`)}
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
                             setShowRightAnsModal(true)
                        } else {
                             setShowWrongAns(true)
                        }
                        }}key={selectedAnswer}>Check
                    </ Button>
                </div>

                <div className="btn-wrapper">
                    <Button className="next-btn" onClick={nextExercise}> 
                      Next
                    </Button>
                </div>
            </div>
        </Container>
        <RightAnswerModal show={showRightAnsModal} onHide={() => setShowRightAnsModal(false)} />
        <WrongAnswerModal show={showWrongAns} onHide={() => setShowWrongAns(false)}/>
        </>
    )
}
    export default GameOne;