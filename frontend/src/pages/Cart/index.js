import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = localStorage.getItem("cart");
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const updateQuantity = (itemId, newQuantity) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeItemFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <S.Container>
            <S.Title>Carrinho de Compras</S.Title>
            {cartItems.length === 0 ? (
                <S.EmptyCartMessage>O carrinho está vazio</S.EmptyCartMessage>
            ) : (
                <>
                    <S.CartList>
                        {cartItems.map((item) => (
                            <S.CartItem key={item.id}>
                                <S.LeftContent>
                                    <S.ItemImage src={item.images[0].image} alt={item.name} />
                                    <S.ItemDetails>
                                        <S.ItemName>{item.name}</S.ItemName>
                                        <S.ProductDescription>{item.description}</S.ProductDescription>
                                        <S.ItemPrice>R$ {(item.price * item.quantity).toFixed(2)}</S.ItemPrice>
                                    </S.ItemDetails>
                                </S.LeftContent>
                                <S.RightContent>
                                    <S.RemoveButton onClick={() => removeItemFromCart(item.id)}>
                                        <FaTrashAlt />
                                    </S.RemoveButton>
                                    <S.QuantityInput
                                        type="number"
                                        min={1}
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                    />
                                    <S.AddButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                        <FaPlus />
                                    </S.AddButton>
                                </S.RightContent>
                            </S.CartItem>
                        ))}
                    </S.CartList>
                    <S.TotalPrice>Total: R$ {calculateTotalPrice().toFixed(2)}</S.TotalPrice>
                    <S.CheckoutButton>Finalizar Reserva</S.CheckoutButton>
                </>
            )}
        </S.Container>
    );
};

export default Cart;
