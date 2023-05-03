import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const ModalComponent = () => {
    const [smShow, setSmShow] = useState(false);

    return     (
    <>
        <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
        <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
            >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                TEEEEEEEEEEST
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
        </Modal>
    </>
);
}

export default ModalComponent