import React, { useState } from "react";
import { CardContainer, StyledImage, StyledDescription, StyledPrice, StyledName, StyledContent } from "./styles";
import OptionsButton from "../OptionsButton";
import ProductModal from "../ProductModal";
import AddProductModal from "../AddProductModal";

const Card = ({ product }) => {
  const { name, price, description } = product;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const images = product.images && product.images[0].image;

  const formattedPrice = Number(price).toFixed(2);

  const handleEdit = () => {
    setIsEditClicked(true);
    console.log("Editar item:", name);
  };

  const handleDelete = () => {
    console.log("Excluir item:", name);
  };

  const handleCardClick = (event) => {
    if (!event.target.closest("button")) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditClicked(false);
  };

  return (
    <>
      <CardContainer onClick={handleCardClick}>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,700&display=swap');
        </style>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%', width: '100%' }}>
          <div style={{ marginRight: 8 }}>
            <StyledImage src={images} />
          </div>
          <StyledContent>
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: 25 }}>
              <OptionsButton onEdit={handleEdit} onDelete={handleDelete} />
            </div>
            <div>
              <StyledName>{name}</StyledName>
              <StyledDescription>{description}</StyledDescription>
              <StyledPrice>R$ {formattedPrice}</StyledPrice>
            </div>
          </StyledContent>
        </div>
      </CardContainer>

      {isModalOpen && !isEditClicked && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={product}
        />
      )}

      {isEditClicked && (
        <AddProductModal
          isOpen={isEditClicked}
          isEditing
          onClose={() => setIsEditClicked(false)}
          product={product}
        />
      )}
    </>
  );
};

export default Card;
