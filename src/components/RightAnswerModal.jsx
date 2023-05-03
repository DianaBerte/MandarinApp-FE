import { Modal } from "react-bootstrap";

const RightAnswerModal = ({show, onHide}) => {

    return     (
    <>
        <Modal
            className="modal"
            size="sm"
            show={show}
            onHide={onHide}
            >
            <Modal.Header closeButton>
                <Modal.Title className="modal-title">
                <p>YAY!<br/>你太棒了！</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-text">blablabla</Modal.Body>
        </Modal>
    </>
);
}

export default RightAnswerModal