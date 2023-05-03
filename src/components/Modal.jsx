import { Modal } from "react-bootstrap";

const ModalComponent = ({show, onHide}) => {

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
                TEEEEEEEEEEST
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-text">blablabla</Modal.Body>
        </Modal>
    </>
);
}

export default ModalComponent