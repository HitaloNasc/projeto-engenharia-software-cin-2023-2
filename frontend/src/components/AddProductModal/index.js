import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "../../components/Modal";
import { addProduct, editProduct } from "./fetch";

const AddProductModal = ({ isOpen, onClose, isEditing, product }) => {
  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    file: null,
  });

  useEffect(() => {
    if (isEditing && product) {
      setProductInfo(product);
    }
  }, [isEditing, product]);

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
    if (isEditing) {
      editProduct(productInfo).then((data) => {
        console.log(data);
      });
    } else {
      addProduct(productInfo).then((data) => {
        console.log(data);
      });
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={isEditing ? "Editar Produto" : "Adicionar Produto"}>
      <form>
        <TextField
          label="Nome do Produto"
          name="name"
          value={productInfo.name || ""}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Descrição do Produto"
          name="description"
          value={productInfo.description || ""}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Preço"
          name="price"
          value={productInfo.price || ""}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Quantidade em Estoque"
          name="stock"
          value={productInfo.stock || ""}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <input type="file" accept="image/*" multiple onChange={handleFileChange} />
      </form>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {isEditing ? "Salvar" : "Adicionar"}
        </Button>
      </div>
    </Modal>
  );
};

export default AddProductModal;
