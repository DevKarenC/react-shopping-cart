import React, { useState, useEffect } from "react";
import EmptyCartPage from "./EmptyCartPage";
import CartWithItemsPage from "./CartWithItemsPage";

const Cart = ({ getCartItems, handleAddToCart }) => {
  const [cartItems, setCartItems] = useState(() => []);

  const updateCart = () => {
    setCartItems(getCartItems());
  };

  useEffect(() => {
    updateCart();
  });

  return (
    <>
      {cartItems.length === 0 ? (
        <EmptyCartPage />
      ) : (
        <CartWithItemsPage
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
        />
      )}
    </>
  );
};

export default Cart;
