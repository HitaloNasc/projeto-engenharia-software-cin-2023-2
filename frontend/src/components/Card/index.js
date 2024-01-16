import React, { useState } from "react";
import { CardContainer, StyledImage, StyledPrice, StyledName, StyledContent } from "./styles";
import AddToCartButton from "../AddToCartButton";
import OptionsButton from "../AddOptionsButton";
import ProductModal from "../ProductModal";

const Card = ({ product }) => {
  const { name, price } = product;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = product.images[0].image;

  const formattedPrice = Number(price).toFixed(2);

  const handleAddToCart = () => {
    console.log("Adicionado ao carrinho!");
  };

  const handleEdit = () => {
    console.log("Editar item:", name);
  };

  const handleDelete = () => {
    console.log("Excluir item:", name);
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CardContainer onClick={handleCardClick}>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,700&display=swap');
        </style>
        <div style={{ display: 'flex', marginRight: 8 }}>
          <StyledImage src={images} />
          <div style={{ marginLeft: 0, padding: 0 }}>
            <OptionsButton onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        </div>
        <StyledContent>
          <StyledName>{name}</StyledName>
          <StyledPrice>R$ {formattedPrice}</StyledPrice>
          <AddToCartButton onClick={handleAddToCart} />
        </StyledContent>
      </CardContainer>

      {isModalOpen && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={product}
        />
      )}
    </>
  );
};

export default Card;
