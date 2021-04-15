import React, { useState } from "react";
import * as S from "../styled/Shop-styling";

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(() => 1);
  const [cartItems, addToCart] = useState(() => []);

  const onClickAddToCart = () => {
    const cartItemsCopy = cartItems.slice();
    addToCart();
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
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
        <S.ProductImage src={product.imgSrc} alt={product.imgAlt} />
        <S.ProductDetailsContainer>
          <S.ProductName>{product.name}</S.ProductName>
          <S.ProductPrice>$ {product.price}</S.ProductPrice>
        </S.ProductDetailsContainer>
        <S.ProductQuantity>
          <S.ProductQuantityButton onClick={decrementQuantity}>
            −
          </S.ProductQuantityButton>
          <S.ProductQuantityInput type="number" value={quantity} />
          <S.ProductQuantityButton onClick={incrementQuantity}>
            +
          </S.ProductQuantityButton>
        </S.ProductQuantity>
        <div>
          <button onClick={onClickAddToCart} className="add-to-cart">
            ADD TO CART
          </button>
        </div>
      </S.ProductCard>
    </div>
  );
}

export default ProductCard;
