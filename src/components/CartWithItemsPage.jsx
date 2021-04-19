import React from "react";
import CartItem from "./CartItem";
import * as S from "../styled/Cart-styling";

const CartWithItemsPage = ({ cartItems }) => {
  return (
    <S.CartWithItemsPageSection>
      <S.CartItemsSection>
        {cartItems.map((cartItem) => {
          return <CartItem cartItem={cartItem} />;
        })}
      </S.CartItemsSection>
      <S.TotalAmountSection></S.TotalAmountSection>
    </S.CartWithItemsPageSection>
  );
};

export default CartWithItemsPage;
