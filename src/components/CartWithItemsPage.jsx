import React from "react";
import CartItem from "./CartItem";
import CartTotalAmount from "./CartTotalAmount";
import * as S from "../styled/Cart-styling";

const CartWithItemsPage = ({ cartItems, handleAddToCart }) => {
  return (
    <S.CartWithItemsPageSection>
      <S.CartItemsSection>
        {cartItems.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </S.CartItemsSection>
      <S.TotalAmountSection>
        <CartTotalAmount cartItems={cartItems} />
        <S.CheckoutButton>Checkout</S.CheckoutButton>
      </S.TotalAmountSection>
    </S.CartWithItemsPageSection>
  );
};

export default CartWithItemsPage;
