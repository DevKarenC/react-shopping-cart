import React from "react";
import * as S from "../styled/Cart-styling";

const CartWithItemsPage = ({ cartItems }) => {
  return (
    <S.CartWithItemsPageSection>
      <S.CartItemsSection></S.CartItemsSection>
      <S.TotalAmountSection></S.TotalAmountSection>
    </S.CartWithItemsPageSection>
  );
};

export default CartWithItemsPage;
