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
  margin: 2rem;
`;

const FilterSection = styled(ShopSection)`
  align-items: center;
  margin: 1rem 0;
`;

const Results = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 1.25rem;
  letter-spacing: 1px;
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
  min-width: 350px;
  max-width: 350px;
  height: auto;
  box-shadow: 0 4px 8px #e2dad5;
  margin: 30px;
  padding-bottom: 0.75rem;
`;

const ProductImage = styled.img`
  width: 350px;
  height: auto;
  cursor: pointer;
`;

const ProductBadge = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 1.1rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  padding: 0.25rem 0;
  color: #ffffff;
  background-color: #826c55;
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
};
