import { Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setCurrentGame } from "../../../redux/actions/index.js";

const GameOne = () => {
    let [currentGameIndex, setCurrentGameIndex] = useState(0); //stores the index of the current game beong displayed
    let [currentGame, setCurrentGame] = useState({}); //stores the game object

    const games = useSelector((state) => {
        return state.currentGame;
    });
 
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(setCurrentGame());
    //     setGame(games[currentGameIndex]) //setting the initial value of "game" to the first game in the list
    // }, [])

    const nextGame = async () => {          
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
                <div className="game-container">
                    <div className="left-title"><h5>Questions</h5></div>
                    <div className="left-column">
                        <ul>
                           <li>{currentGame.question}</li>      
                        </ul>
                    </div>
                    <div className="right-title"><h5>Answers</h5></div>
                    <div className="right-column">
                        <ul>
                            {currentGame.answers && currentGame.answers.length > 0 &&
                                currentGame.answers[0].answers.map((ans) => (
                                    <li key={ans}>{ans}</li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <Button className="next" onClick={nextGame}>
                      Next
                    </Button>
                </div>
            </div>
        </Container>
        </>
    )
}
    export default GameOne;