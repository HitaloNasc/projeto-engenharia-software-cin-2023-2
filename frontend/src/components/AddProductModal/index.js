import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "../../components/Modal";

const AddProductModal = ({ isOpen, onClose }) => {
  const [productInfo, setProductInfo] = useState({
    productName: "",
    productDescription: "",
    price: "",
    stockQuantity: "",
    file: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      file,
    }));
  };

  const handleSubmit = () => {
    console.log("Product Info:", productInfo);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Adicionar Produto">
      <form>
        <TextField
          label="Nome do Produto"
          name="productName"
          value={productInfo.productName}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Descrição do Produto"
          name="productDescription"
          value={productInfo.productDescription}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Preço"
          name="price"
          value={productInfo.price}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Quantidade em Estoque"
          name="stockQuantity"
          value={productInfo.stockQuantity}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <input type="file" onChange={handleFileChange} />
      </form>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Adicionar
        </Button>
      </div>
    </Modal>
  );
};

export default AddProductModal;
