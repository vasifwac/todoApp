import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './todoApp.css'


export default function DeleteModal({ handleDelete, className, index ,id}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteClick=()=>{
        handleDelete(id)
        handleClose()
    }

    return (
        <div className={className}>
            <i class="far fa-trash-alt" onClick={handleShow} />

            <Modal show={show} onHide={handleClose}>
              
                <Modal.Header closeButton>
                    <Modal.Title>Delete this?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're deleteing this text?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={deleteClick}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
