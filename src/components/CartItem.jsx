import React, { useState, useEffect } from "react";
import ProductQuantity from "./ProductQuantity";
import * as S from "../styled/Cart-styling";

const CartItem = ({ cartItem, handleAddToCart }) => {
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

  useEffect(() => {
    handleAddToCart(cartItem, quantity);
  }, [cartItem, quantity]);

  return (
    <S.CartItemContainer>
      <S.CartItemImage src={cartItem.imgSrc} alt={cartItem.imgAlt} />
      <S.CartItemDetailsContainer>
        <S.CartItemDetailsText>{cartItem.name}</S.CartItemDetailsText>
        <S.CartItemDetailsText>$ {cartItem.price}</S.CartItemDetailsText>
        <ProductQuantity
          quantity={quantity}
          updateItemQuantity={updateItemQuantity}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
        />
      </S.CartItemDetailsContainer>
    </S.CartItemContainer>
  );
};

export default CartItem;
