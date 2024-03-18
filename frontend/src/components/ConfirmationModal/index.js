import React from "react";
import Modal from "../Modal";
import Button from "@mui/material/Button";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, onCancel, productName }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Excluir Produto">
            <p>Deseja realmente excluir o produto {productName}?</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                <Button onClick={onCancel} style={{ color: '#bd2d4e' }}>
                    Cancelar
                </Button>
                <Button onClick={onConfirm} style={{ backgroundColor: '#bd2d4e', color: '#fff' }}>
                    Excluir
                </Button>
            </div>
        </Modal>
    );
};

export default ConfirmationModal;
