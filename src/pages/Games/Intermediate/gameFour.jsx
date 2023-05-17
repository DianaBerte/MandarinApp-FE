import { Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchInterSecond } from "../../../redux/actions/index.js";
import RightAnswerModal from "../../../components/RightAnswerModal.jsx";
import WrongAnswerModal from "../../../components/WrongAnswerModal.jsx";

const GameFour = ({quizAnswers}) => {

    // useEffect(() => {
    //     const currentUserInfo = {
    //     ...localStorage.getItem("currentUser"),
    //     quizAnswers,
    //     };
    // //     localStorage.setItem("currentUser", JSON.stringify(currentUserInfo));
    //     }, [quizAnswers]);

    const navigate = useNavigate();

    let [currentGameIndex, setCurrentGameIndex] = useState(5); //stores the index of the current game beong displayed
    let [currentGame, setCurrentGame] = useState({}); //stores the game object
    let [showRightAnsModal, setShowRightAnsModal] = useState(false);
    let [showWrongAns, setShowWrongAns] = useState(false);
    let [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showNextBtn, setShowNextBtn] = useState(false);

    // const newQuizAnswers = [...currentUserInfo.quizAnswers, selectedAnswer];
    // const newCurrentUserInfo = {...currentUserInfo, quizAnswers: newQuizAnswers};
    // localStorage.setItem("currentUser", JSON.stringify(newCurrentUserInfo));

    const games = useSelector((state) => {
        console.log("Working: return state.currentGame in gameFour")
        return state.currentGame;
    });
 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInterSecond());
        setCurrentGame(games[currentGameIndex]) //setting the initial value of "game" to the first game in the list
        console.log("Working: dispatch(fetchInterSecond) in gameFour")  
    }, [])

    const newCurrentUserInfo = useSelector((state) => state.currentUser.currentUser)
    
    const quizAnswersState = [quizAnswersState, setQuizAnswersState] = useState(quizAnswers)
 


    const nextExercise = async () => {     
        try {

            // let currentUser = JSON.parse(localStorage.getItem("currentUser"));
            // if (!currentUser) {
            //     currentUser = {quizAnswers: []};
            // }
            // if (selectedAnswer === currentGame.answers[0].correctAnswer) {
            //     currentUser.quizAnswers.push(selectedAnswer);
            //     localStorage.setItem("currentUser", JSON.stringify(currentUser));
            // }
            
            // create a copy of the quizAnswers array:
            

            if (selectedAnswer === currentGame.answers[0].correctAnswer) {
                const newQuizAnswers = [quizAnswersState];
                newQuizAnswers.push(selectedAnswer);
                setQuizAnswersState(newQuizAnswers);
                localStorage.setItem("currentUser", JSON.stringify(newCurrentUserInfo));
                console.log("current user in gameFOUR: ", newCurrentUserInfo)
            }

            
            if (currentGameIndex <= 8) { //checking if there are more games in the list (max. 5) and updating the state accordingly 
                setCurrentGameIndex(currentGameIndex + 1);
                setCurrentGame(games[currentGameIndex + 1]);
                console.log("Working: nextExercise() in gameFour")   
            } else {
                setTimeout(() => {
                    navigate(`/games/intermediate/third`, {quizAnswers: quizAnswers});
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
        <Container>
            <div className="container-div">
                <div><h1>Match the pairs!</h1></div>

                <div className="game-container">
                    <div className="left-title"><h5></h5></div>
                    <div className="left-column">
                           <video src={currentGame.question} controls></video>
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

                {/* {showNextBtn && (
                <div className="btn-wrapper">
                    <Button className="next-btn" onClick={nextExercise}> 
                      Next
                    </Button>
                </div>
                )} */}


            </div>
        </Container>
        <RightAnswerModal show={showRightAnsModal} onHide={() => setShowRightAnsModal(false)} />
        <WrongAnswerModal show={showWrongAns} onHide={() => setShowWrongAns(false)}/>
        </>
    )
}

export default GameFour