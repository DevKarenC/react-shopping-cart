import React from "react";
import MenuItemCard from "./MenuItemCard";
import { menuItemDetails } from "../constants/menuItemDetails";
import * as S from "../styled/Menu-styling";

const Menu = () => {
  return (
    <S.MenuSection>
      {menuItemDetails.map((menuItem) => {
        return <MenuItemCard menuItem={menuItem} key={menuItem.id} />;
      })}
    </S.MenuSection>
  );
};

export default Menu;
