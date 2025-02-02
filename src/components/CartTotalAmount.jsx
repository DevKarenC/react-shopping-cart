import React, { useState, useEffect } from "react";
import * as S from "../styled/Cart-styling";
import roundTo from "round-to";

const CartTotalAmount = ({ cartItems }) => {
  const [totalAmount, setTotalAmount] = useState(() => 0);

  const updateTotalAmount = () => {
    setTotalAmount(
      cartItems.reduce((total, cur) => {
        return roundTo(total + Number(cur.price) * cur.qty, 2);
      }, 0)
    );
  };

  useEffect(() => {
    updateTotalAmount();
  }, [cartItems]);

  return (
    <>
      <S.OrderSummary>Order Summary</S.OrderSummary>
      <S.AmountSection>
        <span>Subtotal:</span>
        <span>{totalAmount}</span>
      </S.AmountSection>
      <S.AmountSection>
        <span>Shipping:</span>
        <span>Free</span>
      </S.AmountSection>
      <S.AmountSection>
        <span>Total:</span>
        <span>{totalAmount}</span>
      </S.AmountSection>
    </>
  );
};

export default CartTotalAmount;
