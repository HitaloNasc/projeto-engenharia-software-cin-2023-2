import React from "react";
import Modal from "../Modal";
import AddToCartButton from "../AddToCartButton";
import { ModalContentWrapper, ProductName, ProductDescription, ProductPrice, StockInfo } from "./styles";

const ProductModal = ({ isOpen, onClose, product }) => {
    if (!product) {
        return null;
    }

    const { name, price, description, stock } = product;
    const image = product.images[0].image;

    return (
        <Modal isOpen={isOpen} onClose={onClose} padding={"0"}>
            <ModalContentWrapper>
                <img src={image} alt={name} />
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
