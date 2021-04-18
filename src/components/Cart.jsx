import React, { useState, useEffect } from "react";

const Cart = ({ getCartItems }) => {
  const [cartItems, setCartItems] = useState(() => []);

  const updateCart = () => {
    setCartItems(getCartItems());
  };

  useEffect(() => {
    updateCart();
  });

  return (
    <div>
      <div>{cartItems[0].name}</div>
    </div>
  );
};

export default Cart;
