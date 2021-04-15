import React, { useState } from "react";
import * as S from "../styled/Shop-styling";

function ProductCard(props) {
  const [quantity, setQuantity] = useState(() => 1);
  const [cartItems, addToCart] = useState(() => []);

  const onClickAddToCart = () => {
    const cartItemsCopy = cartItems.slice();

    addToCart();
  };

  const isLimited = () => {
    return props.product.limited ? (
      <>
        <span>Limited </span>
      </>
    ) : null;
  };

  const isOnSale = () => {
    return props.product.onSale ? (
      <>
        <span>On Sale</span>
      </>
    ) : null;
  };

  return (
    <div>
      <S.ProductCard>
        <div className="product-image">
          <S.ProductImage
            src={props.product.imgSrc}
            alt={props.product.imgAlt}
          />
        </div>
        <div className="product-description">
          <div className="product-name">{props.product.name}</div>
          <div className="product-price">$ {props.product.price}</div>
          <div className="product-specials">
            {isLimited()}
            {isOnSale()}
          </div>
        </div>
        <div className="product-options">
          <div className="product-quantity">
            <span>Quantity</span>
            <input type="number" />
          </div>
          <div>
            <button onClick={onClickAddToCart} className="add-to-cart">
              ADD TO CART
            </button>
          </div>
        </div>
      </S.ProductCard>
    </div>
  );
}

export default ProductCard;
