import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: #bd2d4e;
  color: #fff;
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

export const CartLink = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  color: #fff;
  position: relative;

  svg {
    vertical-align: middle;
  }
`;