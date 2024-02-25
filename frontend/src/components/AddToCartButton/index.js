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
      style={{ backgroundColor: '#bd2d4e', marginTop: '10px' }}
    >
      Adicionar ao Carrinho
    </Button>
  );
};

export default AddToCartButton;
