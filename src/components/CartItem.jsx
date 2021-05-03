import React, { useState } from "react";
import ProductQuantity from "./ProductQuantity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import * as S from "../styled/Cart-styling";

const CartItem = ({ cartItem, handleAddToCart, deleteCartItem }) => {
  const [quantity, setQuantity] = useState(() => cartItem.qty);

  const updateItemQuantity = (e) => {
    const newQuantity = quantity;
    setQuantity(Number(e.target.value));
    handleAddToCart(cartItem, Number(e.target.value) - newQuantity);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 2) return prevQuantity - 1;
      return 1;
    });
    if (quantity >= 2) {
      handleAddToCart(cartItem, -1);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    handleAddToCart(cartItem, 1);
  };

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
        <S.DeleteButton>
          <FontAwesomeIcon
            icon={faTrashAlt}
            onClick={() => deleteCartItem(cartItem.id)}
          />
        </S.DeleteButton>
      </S.CartItemDetailsContainer>
    </S.CartItemContainer>
  );
};

export default CartItem;
