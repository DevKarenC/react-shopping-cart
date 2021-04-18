import React, { useState, useEffect } from "react";
import EmptyCartPage from "./EmptyCartPage";

const Cart = ({ getCartItems }) => {
  const [cartItems, setCartItems] = useState(() => []);

  const updateCart = () => {
    setCartItems(getCartItems());
  };

  useEffect(() => {
    updateCart();
  });

  return <div>{cartItems.length === 0 ? <EmptyCartPage /> : null}</div>;
};

export default Cart;
