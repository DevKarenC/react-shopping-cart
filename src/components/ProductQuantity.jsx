import React from "react";
import * as S from "../styled/Shop-styling";

const ProductQuantity = ({
  quantity,
  updateItemQuantity,
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
        onChange={updateItemQuantity}
      />
      <S.ProductQuantityButton onClick={incrementQuantity}>
        +
      </S.ProductQuantityButton>
    </S.ProductQuantity>
  );
};

export default ProductQuantity;
