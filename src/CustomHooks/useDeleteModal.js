import { useState } from 'react'

export const useDeleteModal = ({ handleDelete, item }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteClick = () => {
        handleDelete(item)
        handleClose()
    }
    return {
        show, handleShow, handleClose, deleteClick
    }
}
