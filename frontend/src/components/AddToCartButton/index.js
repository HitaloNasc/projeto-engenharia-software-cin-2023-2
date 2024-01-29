import React, { useState } from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AddToCartButton = ({ onClick }) => {
  const [quantidade, setQuantidade] = useState(0);

  const incrementarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const decrementarQuantidade = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  };

  const handleAdicionarAoCarrinho = () => {
    
    if (onClick) {
      onClick(quantidade); 
    }
    
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="outlined"
          size="small"
          onClick={decrementarQuantidade}
        >
          -
        </Button>
        <div style={{ margin: "0 5px" }}>{quantidade}</div>
        <Button
          variant="outlined"
          size="small"
          onClick={incrementarQuantidade}
        >
          +
        </Button>
      </div>
      <Button
        variant="contained"
        size="small"
        color="primary"
        startIcon={<ShoppingCartIcon />}
        onClick={handleAdicionarAoCarrinho}
        style={{ backgroundColor: "#6929F0", marginRight: "5px" }}
      >
        Adicionar ao Carrinho
      </Button>
      
    </div>
  );
};

export default AddToCartButton;