import { Modal } from "react-bootstrap";
import "../assets/games.css"

const RightAnswerModal = ({show, onHide}) => {

    return     (
    <>
        <Modal
            className="green-modal"
            size="lg"
            show={show}
            onHide={onHide}
            >
            <Modal.Header className="gmodal-header" closeButton>
                <Modal.Title className="gmodal-title">
                <h1>你太棒了!</h1>
                <img className="fu" src="https://res.cloudinary.com/degg5zebq/image/upload/v1684514291/Hongbao_lbgyx3.png" />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="gmodal-text">You're doing great!</Modal.Body>
        </Modal>
    </>
);
}

export default RightAnswerModal