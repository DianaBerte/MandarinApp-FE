import { Modal } from "react-bootstrap";

const RightAnswerModal = ({show, onHide}) => {

    return     (
    <>
        <Modal
            className="green-modal"
            size="sm"
            show={show}
            onHide={onHide}
            >
            <Modal.Header closeButton>
                <Modal.Title className="gmodal-title">
                <p>你太棒了!</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="gmodal-text">[Nǐ tài bàngle]<br/>You're doing great!</Modal.Body>
        </Modal>
    </>
);
}

export default RightAnswerModal