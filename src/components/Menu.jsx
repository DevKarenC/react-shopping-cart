import React from "react";
import MenuItemCard from "./MenuItemCard";
import { menuItemDetails } from "../constants/menuItemDetails";
import * as S from "../styled/Menu-styling";

const Menu = () => {
  return (
    <S.MenuSection>
      {/* <div className="menu-cards-inner-grid"> */}
      {menuItemDetails.map((menuItem) => {
        return <MenuItemCard menuItem={menuItem} key={menuItem.id} />;
      })}
      {/* </div> */}
    </S.MenuSection>
  );
};

export default Menu;
