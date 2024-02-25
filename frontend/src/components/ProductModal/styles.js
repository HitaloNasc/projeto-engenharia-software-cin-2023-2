import styled from "styled-components";

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
`;

export const NavButton = styled.button`
  display: ${(props) => (props.disabled ? "none" : "flex")};
  position: absolute;
  top: 50%;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => (props.disabled ? "#ff0000" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  outline: none;

  &:hover {
    color: ${(props) => (props.disabled ? "#ff0000" : "#aaa")};
  }
`;

export const ProductName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StockInfo = styled.p`
  color: #888;
`;

export const LeftNavButton = styled(NavButton)`
  left: 10px;
`;

export const RightNavButton = styled(NavButton)`
  right: 10px;
`;
