import React, { useState } from "react";
import ProductQuantity from "./ProductQuantity";
import * as S from "../styled/Cart-styling";

const CartItem = ({ cartItem }) => {
  const [quantity, setQuantity] = useState(() => cartItem.qty);

  const updateItemQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 2) return prevQuantity - 1;
      return 1;
    });
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <S.CartItemContainer>
      <S.CartItemImage src={cartItem.imgSrc} alt={cartItem.imgAlt} />
      <S.CartItemDetailsContainer>
        <S.CartItemDetailsText>{cartItem.name}</S.CartItemDetailsText>
        <S.CartItemDetailsText>$ {cartItem.price}</S.CartItemDetailsText>
        {/* <S.CartItemDetailsText>Qty: {cartItem.qty}</S.CartItemDetailsText> */}
        <ProductQuantity
          quantity={quantity}
          updateItemQuantity={updateItemQuantity}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
        />
        <S.CartItemDetailsText></S.CartItemDetailsText>
      </S.CartItemDetailsContainer>
    </S.CartItemContainer>
  );
};

export default CartItem;
