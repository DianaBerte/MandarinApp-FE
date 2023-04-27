import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/index.js";
import { useNavigate } from "react-router-dom";
import { SET_CURRENT_GAME, getGames } from "../../../redux/actions/index.js";

const GameOne = () => {



    // const playGameOne = () => {

    //     const dispatch = useAppDispatch();
    //     const navigate = useNavigate();

    //     return async (dispatch, getState) => {
    //         console.log("hello")
    //       try {
    //         let res = await fetch(`${process.env.REACT_APP_BE_URL}/games`, {
    //           method: "GET",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //         });
    //         if (res.ok) {
    //           const currentGame = await res.json();
    //           dispatch({ type: 'SET_CURRENT_GAME', payload: currentGame });
    //           console.log("current game: ", currentGame)
    //         }
    //       } catch (error) {
    //         console.log(error);  
    //       }
    //     };
    //   };

    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const playGameOne = async (dispatch) => {      
        
        try {            
            let res = await fetch(`${process.env.REACT_APP_BE_URL}/games`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",       
                },
            });
            if (res.ok) { 
                const currentGame = await res.json();
                console.log("THIS IS THE LAST FUNCTIONING LINE")
                dispatch(currentGame)
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
                    <div className="left-column"></div>
                    <div className="right-column"></div>
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