import { Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../../../redux/actions/index.js";

const GameOne = () => {
    let [currentGameIndex, setCurrentGameIndex] = useState(0); //stores the index of the current game beong displayed
    let [currentGame, setCurrentGame] = useState({}); //stores the game object

    const games = useSelector((state) => {
        return state.currentGame;
    });
 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGames());
        setCurrentGame(games[currentGameIndex]) //setting the initial value of "game" to the first game in the list
    }, [])

    const nextExercise = async () => {          
        try {
            if (currentGameIndex < games.length - 1) { //checking if there are more games in the list and updating the state accordingly 
                setCurrentGameIndex(currentGameIndex + 1);
                setCurrentGame(games[currentGameIndex + 1]);
            } else {
                console.log("No more games");
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
                                && currentGame.answers[0].answers.map((ans) => ( //If condition is met, it maps through the first element in the "answers" array and renders button
                                    <button className="chars-btn" onClick={() => {
                                        console.log("ans: ", ans)
                                        console.log("currentGame.answers[0].correctAnswer: ", currentGame.answers[0].correctAnswer)
                                        if(ans === currentGame.answers[0].correctAnswer) {
                                            console.log("Yay!")
                                            //when user presses on "Check", the modal should display success alert
                                        } else {
                                            console.log("Nay:(")
                                            //when user presses on "Check", the modal should display wrong alert
                                        }
                                    }}key={ans}>{ans}</button>
                                ))}
                    </div>
                </div> 
                <div className="btn-wrapper">
                    <Button className="check-btn">
                     {/* onClick={checkExercise} */}
                      Check
                    </Button>
                </div>
                <div className="btn-wrapper">
                    <Button className="next-btn" onClick={nextExercise}> 
                      Next
                    </Button>
                </div>
            </div>
        </Container>
        </>
    )
}
    export default GameOne;