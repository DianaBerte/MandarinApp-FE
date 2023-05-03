import { Modal, Button } from "react-bootstrap";

const ModalComponent = ({show, onHide}) => {

    return     (
    <>
        <Modal
            size="sm"
            show={show}
            onHide={onHide}
            aria-labelledby="example-modal-sizes-title-sm"
            >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                TEEEEEEEEEEST
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>blablabla</Modal.Body>
        </Modal>
    </>
);
}

export default ModalComponent