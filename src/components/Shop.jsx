import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { productDetails } from "../constants/productDetails";
import * as S from "../styled/Shop-styling";

const Shop = ({ handleAddToCart, updateQuantity, addToCartSuccessPopup }) => {
  let [sortType, setSortType] = useState(productDetails);
  const onClickSetSortType = (filter) => {
    if (filter === "sortByLimited") {
      setSortType(
        (sortType = [...sortType].sort((a, b) => b.limited - a.limited))
      );
    } else if (filter === "sortByOnSale") {
      setSortType(
        (sortType = [...sortType].sort((a, b) => b.onSale - a.onSale))
      );
    } else if (filter === "sortByPrice") {
      setSortType(
        (sortType = [...sortType].sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        ))
      );
    }
  };

  return (
    <S.ShopSection>
      <S.FilterSection>
        <S.Results>{productDetails.length} Results</S.Results>
        <S.Filters>
          Sort by:
          <S.FilterButton onClick={() => onClickSetSortType("sortByLimited")}>
            Limited
          </S.FilterButton>
          <S.FilterButton onClick={() => onClickSetSortType("sortByOnSale")}>
            On Sale
          </S.FilterButton>
          <S.FilterButton onClick={() => onClickSetSortType("sortByPrice")}>
            Price Low to High
          </S.FilterButton>
        </S.Filters>
      </S.FilterSection>
      <S.ProductSection>
        {sortType.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              handleAddToCart={handleAddToCart}
              updateQuantity={updateQuantity}
              addToCartSuccessPopup={addToCartSuccessPopup}
            />
          );
        })}
      </S.ProductSection>
    </S.ShopSection>
  );
};

export default Shop;
