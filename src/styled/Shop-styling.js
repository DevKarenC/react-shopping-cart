import styled from "styled-components";

/* Shop Styling */

const ProductSection = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2vw;
  margin: 2rem;
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

export { ProductSection, ProductCard, ProductImage };
