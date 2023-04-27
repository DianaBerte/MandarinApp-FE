import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const GameOne = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const playGameOne = async () => {
        try {
            let res = await fetch(`${process.env.REACT_APP_BE_URL}/games`);
            let data = await JSON.parse(res);
            console.log("data: ", data)
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