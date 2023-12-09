import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AddToCartButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      size="small"
      color="primary"
      startIcon={<ShoppingCartIcon />}
      onClick={onClick}
      style={{ backgroundColor: '#6929F0', marginTop: '10px' }}
    >
      Adicionar ao Carrinho
    </Button>
  );
};

export default AddToCartButton;
