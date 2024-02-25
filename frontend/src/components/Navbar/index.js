import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavbarContainer, Logo, CartLink } from './styles';

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo to="/dashboard">CInFood</Logo>
            <CartLink to="/cart">
                <FaShoppingCart />
            </CartLink>
        </NavbarContainer>
    );
};

export default Navbar;