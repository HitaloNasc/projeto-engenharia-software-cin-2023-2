import React from "react";
import Modal from "../Modal";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, onCancel, productName }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Excluir Produto">
      <p>Deseja realmente excluir o produto {productName}?</p>
      <button onClick={onConfirm}>Sim</button>
      <button onClick={onCancel}>Cancelar</button>
    </Modal>
  );
};

export default ConfirmationModal;
