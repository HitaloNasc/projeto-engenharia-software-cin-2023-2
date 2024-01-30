import React, { useState } from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AddToCartButton = ({ onClick }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (onClick) {
      onClick(quantity);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="outlined"
          size="small"
          onClick={decrementQuantity}
        >
          -
        </Button>
        <div style={{ margin: "0 5px" }}>{quantity}</div>
        <Button
          variant="outlined"
          size="small"
          onClick={incrementQuantity}
        >
          +
        </Button>
      </div>
      <Button
        variant="contained"
        size="small"
        color="primary"
        startIcon={<ShoppingCartIcon />}
        onClick={handleAddToCart}
        style={{ backgroundColor: "#6929F0", marginRight: "5px" }}
      >
        Adicionar
      </Button>
    </div>
  );
};

export default AddToCartButton;