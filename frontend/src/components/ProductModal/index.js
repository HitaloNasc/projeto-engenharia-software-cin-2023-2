import React, { useState } from "react";
import Modal from "../Modal";
import AddToCartButton from "../AddToCartButton";
import {
  ModalContentWrapper,
  ProductName,
  ProductDescription,
  ProductPrice,
  StockInfo,
  CarouselWrapper,
  CarouselImage,
  LeftNavButton,
  RightNavButton,
} from "./styles";

const ProductModal = ({ isOpen, onClose, product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return null;
  }

  const { name, price, description, stock, images } = product;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images?.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images?.length) % images?.length);
  };

  const isAtFirstImage = currentImageIndex === 0;
  const isAtLastImage = currentImageIndex === images?.length - 1;

  return (
    <Modal isOpen={isOpen} onClose={onClose} padding={"0"}>
      <ModalContentWrapper>
        <CarouselWrapper>
          <LeftNavButton onClick={handlePrevImage} disabled={isAtFirstImage}>&lt;</LeftNavButton>
          <CarouselImage src={images && images[currentImageIndex].image} alt={name} />
          <RightNavButton onClick={handleNextImage} disabled={isAtLastImage}>&gt;</RightNavButton>
        </CarouselWrapper>
        <ProductName>{name}</ProductName>
        <ProductDescription>{description}</ProductDescription>
        <ProductPrice>R$ {Number(price).toFixed(2)}</ProductPrice>
        <StockInfo>Estoque: {stock}</StockInfo>
        <AddToCartButton onClick={() => console.log("Adicionado ao carrinho!")} />
      </ModalContentWrapper>
    </Modal>
  );
};

export default ProductModal;
