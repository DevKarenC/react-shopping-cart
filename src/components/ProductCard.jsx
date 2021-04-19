import React, { useState } from "react";
import ProductQuantity from "./ProductQuantity";
import * as S from "../styled/Shop-styling";

function ProductCard({ product, handleAddToCart, addToCartSuccessPopup }) {
  const [quantity, setQuantity] = useState(() => 1);

  const updateQuantity = (e) => {
    setQuantity(Number(e.target.value));
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
      <ProductQuantity
        quantity={quantity}
        updateQuantity={updateQuantity}
        decrementQuantity={decrementQuantity}
        incrementQuantity={incrementQuantity}
      />
      <S.AddToCartButton
        onClick={() => {
          handleAddToCart(product, quantity);
          addToCartSuccessPopup();
        }}
      >
        Add to Cart
      </S.AddToCartButton>
    </S.ProductCard>
  );
}

export default ProductCard;
