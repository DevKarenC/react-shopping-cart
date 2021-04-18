import React from "react";
import { Link } from "react-router-dom";
import emptyBoxImage from "../images/cart/empty-box-undraw.svg";
import * as S from "../styled/Cart-styling";

const EmptyCartPage = () => {
  return (
    <S.EmptyCartPageSection>
      <S.EmptyCartText>Your Shopping Cart is Empty 😞</S.EmptyCartText>
      <S.EmptyCartImage
        src={emptyBoxImage}
        alt="Person looking down at the empty box with leaves falling down"
      />
      <Link to="/shop">
        <S.ContinueShoppingButton>Continue Shopping</S.ContinueShoppingButton>
      </Link>
    </S.EmptyCartPageSection>
  );
};

export default EmptyCartPage;
