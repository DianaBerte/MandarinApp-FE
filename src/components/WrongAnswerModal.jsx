import { Modal } from "react-bootstrap";

const WrongAnswerModal = ({show, onHide}) => {

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
                <p>再试一次!<br/></p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-text">[Zài shì yīcì]<br />Try again!</Modal.Body>
        </Modal>
    </>
);
}

export default WrongAnswerModal