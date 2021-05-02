import styled from "styled-components";

/* Menu Page Styling */
const MenuSection = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2vw;
  margin: 2rem;
`;

/* MenuItemCard Styling */

const MenuItemCard = styled.div`
  min-width: 350px;
  max-width: 350px;
  height: auto;
  box-shadow: 0 4px 8px #e2dad5;
  margin: 30px;
  padding-bottom: 0.75rem;
`;

const CoffeeImage = styled.img`
  width: 350px;
  height: 350px;
  cursor: pointer;
`;

const MenuItemDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Barlow", sans-serif;
  font-size: 1.15rem;
  letter-spacing: 1px;
  line-height: 2rem;
  text-transform: uppercase;
  margin-top: 0.5rem;
`;

const MenuItemName = styled.div`
  font-weight: 600;
`;

const MenuItemPrice = styled.div`
  display: flex;
  justify-content: center;
`;

const HotOnlyMenu = styled.span`
  color: brown;
`;

const SeasonalMenuBadge = styled.div`
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
  MenuSection,
  MenuItemCard,
  CoffeeImage,
  MenuItemDescription,
  MenuItemName,
  MenuItemPrice,
  HotOnlyMenu,
  SeasonalMenuBadge,
};
