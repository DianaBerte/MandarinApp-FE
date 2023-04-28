import { Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/index.js";
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
        console.log("hello")         
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
                        {/* <p>here I want to display questions, which is array of strings</p> */}
                    </div>
                    <div className="right-column">
                        {/* <p>here I want to display answers, which is an array containing questionSchema</p> */}
                    </div>
                </div>
                <div className="btn-wrapper">
                    <Button className="play" onClick={playGameOne}>
                        {/* playGameOne will fetch data from BE, and it will display questions in the left column and answers in the right column */}
                      Play
                    </Button>
                </div>
            </div>
        </Container>
        </>
    )
}
    export default GameOne;