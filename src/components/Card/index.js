import React from "react";
import { CardContainer, StyledImage, StyledPrice, StyledName, StyledContent } from "./styles";
import AddToCartButton from "../AddToCartButton";
import OptionsButton from "../AddOptionsButton"; 
const Card = (props) => {
  const formattedPrice = Number(props.price).toFixed(2);

  const handleAddToCart = () => {
    console.log("Adicionado ao carrinho!");
  };
  const handleEdit = () => {
    console.log("Editar item:", props.name);
  };

  const handleDelete = () => {
    console.log("Excluir item:", props.name);
  };

  return (
    <CardContainer>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,700&display=swap');
      </style>
      {/* <StyledImage src={props.image} /> */}
      <div style={{ display: 'flex' }}>
        <StyledImage src={props.image} />
        <div style={{ marginLeft: 0, padding: 0 }}> {/* Coloca o botão no lado direito */}
          <OptionsButton onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      </div>
      <StyledContent >
        <StyledName>{props.name}</StyledName>
        <StyledPrice>R$ {formattedPrice}</StyledPrice>
        <AddToCartButton onClick={handleAddToCart} />
        {/* <OptionsButton onEdit={handleEdit} onDelete={handleDelete} /> */}
      </StyledContent>
    </CardContainer>
  );
}

export default Card;
