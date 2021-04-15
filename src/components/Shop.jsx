import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { productDetails } from "../constants/productDetails";
import * as S from "../styled/Shop-styling";

function Shop() {
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
    <div>
      <div>
        <div>{productDetails.length} Results</div>
        <div>
          Sort by
          <button onClick={() => onClickSetSortType("sortByLimited")}>
            Limited
          </button>
          <button onClick={() => onClickSetSortType("sortByOnSale")}>
            On Sale
          </button>
          <button onClick={() => onClickSetSortType("sortByPrice")}>
            Price Low to High
          </button>
        </div>
      </div>
      <S.ProductSection>
        {/* <div className="product-cards-inner-grid"> */}
        {sortType.map((product) => {
          return (
            <div>
              <ProductCard product={product} key={product.id} />
            </div>
          );
        })}
        {/* </div> */}
      </S.ProductSection>
    </div>
  );
}

export default Shop;
