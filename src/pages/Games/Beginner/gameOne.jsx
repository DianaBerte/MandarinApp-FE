import { Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentGame } from "../../../redux/actions/index.js";

const GameOne = () => {
    let [currentGameIndex, setCurrentGameIndex] = useState(0); //stores the index of the current game beong displayed
    let [currentGame, setGame] = useState(""); //stores the game object

    const games = useSelector((state) => {
        return state.currentGame;
    });
 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentGame());
        setGame(games[currentGameIndex]) //setting the initial value of "game" to the first game in the list
    }, [])

    const nextGame = async () => {          
        try {
            if (currentGameIndex < games.length - 1) { //checking if there are more games in the list and updating the state accordingly 
                setCurrentGameIndex(currentGameIndex + 1);
                setGame(games[currentGameIndex + 1]);
            } else {
                console.log("No more games");
            }
        } catch (error) {
            console.log(error)  
        }
    };



    return(
        <>
        <Container>
            <div className="container-div">
                <div className="game-container">
                    <div className="left-title"><h5>Questions</h5></div>
                    <div className="left-column">
                        <ul>
                            {games.map(currentGame => (
                            <li key={currentGame._id}>{currentGame.question}</li>
                            ))}                            
                        </ul>
                    </div>
                    <div className="right-title"><h5>Answers</h5></div>
                    <div className="right-column">
                        <ul>
                            {games.map((currentGame) =>
                                currentGame.answers.map((answer) =>
                                    answer.answers.map((ans) => (
                                        <li key={ans}>{ans}</li>
                            ))
                            ))    
                            }
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