import React, { useEffect, useState } from "react";
import { CardContainer, StyledImage, StyledDescription, StyledPrice, StyledName, StyledContent } from "./styles";
import OptionsButton from "../OptionsButton";
import ProductModal from "../ProductModal";
import AddProductModal from "../AddProductModal";
import ConfirmationModal from "../ConfirmationModal";
import { deleteProduct } from "./fetch";

const Card = ({ product }) => {
  const { name, price, description } = product;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const images = product.images && product.images[0].image;

  const formattedPrice = Number(price).toFixed(2);

  const handleEdit = () => {
    setIsEditModalOpen(true);
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteProduct(product.id);
    setIsDeleteModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const handleCardClick = (event) => {
    if (!event.target.closest(".options-button") && !isEditModalOpen) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    if (isEditModalOpen || isDeleteModalOpen) {
      setIsModalOpen(false);
    }
  }, [isEditModalOpen, isDeleteModalOpen])

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
            <div className="options-button" style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: 25 }}>
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

      {isModalOpen && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={product}
          onEdit={handleEdit}
        />
      )}

      {isEditModalOpen && (
        <AddProductModal
          isOpen={isEditModalOpen}
          isEditing
          onClose={() => setIsEditModalOpen(false)}
          product={product}
        />
      )}

      {isDeleteModalOpen && (
        <ConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          productName={name}
        />
      )}
    </>
  );
};

export default Card;
