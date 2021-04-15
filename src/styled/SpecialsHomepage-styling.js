import styled from "styled-components";

const SpecialsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2.5rem;
`;

const SpecialsText = styled.p`
  font-size: 2.5rem;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.3rem;
`;

const ShopNowButton = styled.button`
  border: 1px solid #81523f;
  background-color: #81523f;
  color: #fff;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.5rem;
  padding: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #81523f;
    border: 1px solid #81523f;
    transition: all 0.1s ease-in;
  }
`;

export { SpecialsSection, SpecialsText, ShopNowButton };
