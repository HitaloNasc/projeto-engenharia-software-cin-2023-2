import styled from "styled-components";

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 500px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: auto;
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
