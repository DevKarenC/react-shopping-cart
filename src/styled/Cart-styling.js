import styled from "styled-components";

/* EMPTY CART PAGE */
const EmptyCartPageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
`;

const EmptyCartImage = styled.img`
  width: 400px;
  height: auto;
  margin-bottom: 3rem;
  margin-top: 1rem;
`;

const EmptyCartText = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin-top: 0;
`;

const ContinueShoppingButton = styled.button`
  border: 1px solid #8c6d56;
  border-radius: 10px;
  background-color: #8c6d56;
  color: #fff;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.25rem;
  padding: 0.75rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #8c6d56;
    border: 1px solid #8c6d56;
    transition: all 0.4s ease-in-out;
  }
`;

/* CART ITEM COMPONENT */

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 250px;

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;

const CartItemImage = styled.img`
  box-shadow: 0 4px 8px #e2dad5;
  border-radius: 5px;
  margin-right: 1rem;
  width: 200px;
  height: 200px;
  flex: 1;
`;

const CartItemDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 200px;
  flex: 2;
`;

const CartItemDetailsText = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 1.25rem;
  letter-spacing: 1px;
  margin: 0.5rem 0;

  &:first-child {
    font-weight: bold;
  }
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 0;
  cursor: pointer;
  color: #7b4819;
  border: 0;
  background: transparent;
  font-size: 1.25rem;
`;

/* ITEMS IN CART PAGE */

const CartWithItemsPageSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70vw;
  margin: 4rem auto;
`;

const CartItemsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 8px #e2dad5;
  padding: 1rem 2rem;
`;

const TotalAmountSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  box-shadow: 0 4px 8px #e2dad5;
  padding: 1rem 2rem;
`;

const AmountSection = styled.div`
  display: flex;
  font-family: "Barlow", sans-serif;
  font-size: 1.25rem;
  letter-spacing: 1px;
  line-height: 2.5rem;

  > * {
    &:first-child {
      font-weight: bold;
      flex: 1;
    }
  }

  &:nth-last-child(2) {
    border-bottom: 1px dotted gray;
    padding-bottom: 1rem;
    margin: 0 0 1rem 0;
  }
`;

const OrderSummary = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  border-bottom: 1px dotted gray;
  padding-bottom: 1rem;
  margin: 1rem 0;
`;

const CheckoutButton = styled.button`
  font-family: "Barlow", sans-serif;
  font-size: 1.25rem;
  letter-spacing: 1px;
  padding: 0.75rem;
  margin: 0.5rem 0;
  background-color: #8c6d56;
  color: #fff;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
`;

/* NAV CART ICON BADGE */
const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -20px;
  right: -20px;
  width: 35px;
  height: 35px;
  background-color: #8c6d56;
  color: #fff;
  border: 1px solid #8c6d56;
  border-radius: 50%;
  font-family: "Barlow", sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
`;

export {
  EmptyCartPageSection,
  EmptyCartImage,
  EmptyCartText,
  ContinueShoppingButton,
  CartItemContainer,
  CartItemImage,
  CartItemDetailsContainer,
  CartItemDetailsText,
  CartWithItemsPageSection,
  CartItemsSection,
  DeleteButton,
  TotalAmountSection,
  AmountSection,
  OrderSummary,
  CheckoutButton,
  Badge,
};
