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

/* ITEMS IN CART PAGE */

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
  Badge,
};
