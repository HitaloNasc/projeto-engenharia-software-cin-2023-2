import React from "react";
import { CardContainer, StyledImage, StyledPrice, StyledName, StyledContent } from "./styles";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Card = (props) => {

  const formattedPrice = Number(props.price).toFixed(2);

  const AddToCartButton = () => {
    const handleAddToCart = () => {
      console.log("Adicionado ao carrinho!");
    };
  
    return (
      <Button
        variant="contained"
        size="small"
        color="primary"
        startIcon={<ShoppingCartIcon />}
        onClick={handleAddToCart}
        style={{backgroundColor: '#6929F0', marginTop: '10px'}}
      >
        Adicionar ao Carrinho
      </Button>
    );
  };

  return (
    <CardContainer>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,700&display=swap');
      </style>
      <StyledImage src={props.image} />
      <StyledContent>
        <StyledName>{props.name}</StyledName>
        <StyledPrice>R$ {formattedPrice}</StyledPrice>
        <AddToCartButton />
      </StyledContent>
    </CardContainer>
  );
}

export default Card;
