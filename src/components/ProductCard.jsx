import React, { useState } from "react";
import * as S from "../styled/Shop-styling";

function ProductCard({ product, handleAddToCart, addToCartSuccessPopup }) {
  const [quantity, setQuantity] = useState(() => 1);

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 2) return prevQuantity - 1;
      return 1;
    });
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
        <S.ProductQuantityInput
          type="number"
          value={quantity}
          min="1"
          onChange={updateQuantity}
        />
        <S.ProductQuantityButton onClick={incrementQuantity}>
          +
        </S.ProductQuantityButton>
      </S.ProductQuantity>
      <S.AddToCartButton
        onClick={() => {
          handleAddToCart(product.name, product.id, product.price, quantity);
          addToCartSuccessPopup();
        }}
      >
        Add to Cart
      </S.AddToCartButton>
    </S.ProductCard>
  );
}

export default ProductCard;
