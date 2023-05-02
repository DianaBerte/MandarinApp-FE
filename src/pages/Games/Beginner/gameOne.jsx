import { Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_CURRENT_GAME, setCurrentGame } from "../../../redux/actions/index.js";

const GameOne = () => {
    let [game, setGame] = useState("")

    const games = useSelector((state) => {
        return state.currentGame;
    });
 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setCurrentGame());
    }, [])

    const playGameOne = async () => {          
        try {
            // const currentGame = await res.json();
            dispatch(setCurrentGame())
            console.log("games ", games)
        } catch (error) {
            console.log(error)  
        }
    };



    return(
        <>
        <Container>
            <div className="container-div">
                <div className="game-container">
                    <div className="left-column">
                        <h5>Questions</h5>
                        <ul>
                            {games.map(game => (
                                <li key={game._id}>{game.questions}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="right-column">
                        <h5>Answers</h5>
                        <ul>
                            {games.map((game) =>
                            game.answers.map((answer) => 
                            answer.answers.map((ans) => (
                                <li key={ans}>{ans}</li>
                            ))
                            )    
                        )}
                        </ul>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <Button className="play" onClick={playGameOne}>
                      Play
                    </Button>
                </div>
            </div>
        </Container>
        </>
    )
}
    export default GameOne;