import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "../../components/Modal";
import AddProductModal from "../../components/AddProductModal";

const AddProductButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={openModal}
        style={{ backgroundColor: "#296AF0", marginTop: "10px" }}
      >
        Adicionar Produto
      </Button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddProductModal isOpen={isModalOpen} onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default AddProductButton;
