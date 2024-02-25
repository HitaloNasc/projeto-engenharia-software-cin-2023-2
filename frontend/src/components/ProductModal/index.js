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
  CloseButton,
} from "./styles";

const ProductModal = ({ isOpen, onClose, product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return null;
  }

  const { id, name, price, description, stock, images } = product;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images?.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images?.length) % images?.length);
  };

  const isAtFirstImage = currentImageIndex === 0;
  const isAtLastImage = currentImageIndex === images?.length - 1;

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === id);

    if (existingItemIndex !== -1) {
      const updatedCart = cartItems.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const newItem = { id, name, price, description, images, quantity: 1 };
      const updatedCart = [...cartItems, newItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    alert("Produto adicionado ao carrinho!");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} padding={"0"}>
      <ModalContentWrapper>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <CarouselWrapper>
          <LeftNavButton onClick={handlePrevImage} disabled={isAtFirstImage}>&lt;</LeftNavButton>
          <CarouselImage src={images && images[currentImageIndex].image} alt={name} />
          <RightNavButton onClick={handleNextImage} disabled={isAtLastImage}>&gt;</RightNavButton>
        </CarouselWrapper>
        <ProductName>{name}</ProductName>
        <ProductDescription>{description}</ProductDescription>
        <ProductPrice>R$ {Number(price).toFixed(2)}</ProductPrice>
        <StockInfo>Estoque: {stock}</StockInfo>
        <AddToCartButton onClick={addToCart} />
      </ModalContentWrapper>
    </Modal>
  );
};

export default ProductModal;
