import React from "react";
import * as S from "../styled/Shop-styling";

const ProductQuantity = ({
  quantity,
  updateQuantity,
  decrementQuantity,
  incrementQuantity,
}) => {
  return (
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
  );
};

export default ProductQuantity;
