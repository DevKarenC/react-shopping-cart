import React, { useState } from "react";
import * as S from "../styled/Shop-styling";

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(() => 1);
  const [cartItems, addToCart] = useState(() => []);

  const onClickAddToCart = () => {
    const cartItemsCopy = cartItems.slice();

    addToCart();
  };

  const renderProductBadge = () => {
    if (product.limited && product.onSale) {
      return <S.ProductBadge>Limited & On Sale</S.ProductBadge>;
    } else if (product.limited) {
      return <S.ProductBadge>Limited</S.ProductBadge>;
    } else if (product.onSale) {
      return <S.ProductBadge>On Sale</S.ProductBadge>;
    }
  };

  return (
    <div>
      <S.ProductCard>
        {renderProductBadge()}
        <div className="product-image">
          <S.ProductImage src={product.imgSrc} alt={product.imgAlt} />
        </div>
        <div className="product-description">
          <div className="product-name">{product.name}</div>
          <div className="product-price">$ {product.price}</div>
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
