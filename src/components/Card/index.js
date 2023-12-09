import React from "react";
import { CardContainer, StyledImage, StyledPrice, StyledName, StyledContent } from "./styles";
import AddToCartButton from "../AddToCartButton";

const Card = (props) => {
  const formattedPrice = Number(props.price).toFixed(2);

  const handleAddToCart = () => {
    console.log("Adicionado ao carrinho!");
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
        <AddToCartButton onClick={handleAddToCart} />
      </StyledContent>
    </CardContainer>
  );
}

export default Card;
