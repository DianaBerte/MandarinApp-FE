import { Container, Button } from "react-bootstrap";




const GameOne = () => {



    const playGameOne = async () => {
        try {
            
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
            </div>
        </Container>
        </>
    )
}
    export default GameOne;