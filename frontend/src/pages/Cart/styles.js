import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
`;

export const EmptyCartMessage = styled.p`
  text-align: center;
`;

export const CartList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

export const ItemDetails = styled.div`
  flex: 1;
`;

export const ItemName = styled.h3`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ProductDescription = styled.p`
  margin-bottom: 10px;
`;

export const ItemPrice = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const QuantityInput = styled.input`
  width: 50px;
  padding: 5px;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #bd2d4e;
  margin-left: 10px;
`;

export const AddButton = styled(RemoveButton)``;

export const TotalPrice = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
  text-align: right;
`;

export const CheckoutButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #bd2d4e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export const AddMoreItemsButton = styled.button`
  color: #bd2d4e;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
`;
