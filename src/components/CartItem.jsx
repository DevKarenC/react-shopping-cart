import React from "react";
import * as S from "../styled/Cart-styling";

const CartItem = ({ cartItem }) => {
  return (
    <S.CartItemContainer>
      <S.CartItemImage src={cartItem.imgSrc} alt={cartItem.imgAlt} />
      <S.CartItemDetailsContainer>
        <S.CartItemDetailsText>{cartItem.name}</S.CartItemDetailsText>
        <S.CartItemDetailsText>$ {cartItem.price}</S.CartItemDetailsText>
        <S.CartItemDetailsText>{cartItem.qty} in Cart</S.CartItemDetailsText>
      </S.CartItemDetailsContainer>
    </S.CartItemContainer>
  );
};

export default CartItem;
