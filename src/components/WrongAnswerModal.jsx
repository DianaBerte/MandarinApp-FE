import { Modal } from "react-bootstrap";
import "../assets/games.css"

const WrongAnswerModal = ({show, onHide}) => {

    return     (
    <>
        <Modal
            className="red-modal"
            size="lg"
            show={show}
            onHide={onHide}
            >
            <Modal.Header className="rmodal-header" closeButton>
                <Modal.Title className="rmodal-title">
                <h1>再试一次!</h1>
                <img className="si" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684514574/chineseSi_mnxluz.png" />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="rmodal-text">Try again!</Modal.Body>
        </Modal>
    </>
);
}

export default WrongAnswerModal