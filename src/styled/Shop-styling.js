import styled from "styled-components";

/* Shop Styling */

const ShopSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductSection = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2vw;
  margin-top: 2rem;
`;

const FilterSection = styled(ShopSection)`
  align-items: center;
  margin-top: 3rem;
`;

const Results = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 1.25rem;
  letter-spacing: 1px;
  margin-top: 0;
`;

const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  align-items: center;
  justify-items: center;
  width: 60vw;
  font-family: "Barlow", sans-serif;
  font-size: 1.25rem;
  letter-spacing: 1px;
`;

const FilterButton = styled.button`
  font-family: "Barlow", sans-serif;
  font-size: 1.25rem;
  letter-spacing: 1px;
  background-color: #f2edde;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

/* ProductCard Styling */

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 350px;
  max-width: 350px;
  height: auto;
  box-shadow: 0 4px 8px #e2dad5;
  margin: 30px;
  padding-bottom: 0.75rem;
`;

const ProductImage = styled.img`
  width: 350px;
  height: 350px;
  cursor: pointer;
`;

const ProductBadge = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 1.1rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  padding: 0.25rem 0;
  width: 350px;
  color: #ffffff;
  background-color: #826c55;
`;

const ProductDetailsContainer = styled.div`
  font-family: "Barlow", sans-serif;
  font-size: 1.25rem;
  text-align: center;
  letter-spacing: 1px;
`;

const ProductName = styled(ProductDetailsContainer)`
  margin: 0.75rem 0;
`;

const ProductPrice = styled(ProductName)`
  margin-bottom: 0.25rem;
`;

const ProductQuantity = styled(ProductDetailsContainer)`
  display: flex;
  margin: 1rem 0;
`;

const ProductQuantityButton = styled.button`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.25rem;
  color: #fff;
  background-color: #8c6d56;
  border: 0;
  width: 2.9rem;
  cursor: pointer;
`;

const ProductQuantityInput = styled.input`
  color: #000;
  font-size: 1.25rem;
  text-align: center;
  width: 4rem;
  height: 1.5rem;
  border: 2px solid #8c6d56;
  outline: 0;
  appearance: textfield;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const AddToCartButton = styled.button`
  border: 1px solid #f2edde;
  background-color: #f2edde;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.25rem;
  padding: 0.75rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #8c6d56;
    transition: all 0.4s ease-in-out;
  }
`;

export {
  ShopSection,
  ProductSection,
  FilterSection,
  Results,
  Filters,
  FilterButton,
  ProductCard,
  ProductImage,
  ProductBadge,
  ProductDetailsContainer,
  ProductName,
  ProductPrice,
  ProductQuantity,
  ProductQuantityButton,
  ProductQuantityInput,
  AddToCartButton,
};
