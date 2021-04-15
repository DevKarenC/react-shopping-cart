import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import * as S from "../styled/Menu-styling";

const MenuItemCard = ({ menuItem }) => {
  const [isFlipped, setIsFlipped] = useState(() => false);

  const hotCoffeeOnly = () => {
    return menuItem.priceIced ? (
      <>
        <span>Iced $ </span> {menuItem.priceIced}
      </>
    ) : (
      <S.HotOnlyMenu>Available in hot only</S.HotOnlyMenu>
    );
  };

  const renderSeasonalBadge = () => {
    return menuItem.seasonal ? (
      <S.SeasonalMenuBadge>Seasonal Special</S.SeasonalMenuBadge>
    ) : null;
  };

  return (
    <>
      <S.MenuItemCard>
        {renderSeasonalBadge()}
        <>
          <ReactCardFlip
            isFlipped={isFlipped}
            flipSpeedBackToFront={1.5}
            flipSpeedFrontToBack={1.5}
          >
            <>
              <S.CoffeeImage
                src={menuItem.hotImgSrc}
                alt={menuItem.hotImgAlt}
                onClick={() => setIsFlipped(!isFlipped)}
              />
            </>
            <>
              <S.CoffeeImage
                src={menuItem.icedImgSrc}
                alt={menuItem.icedImgAlt}
                onClick={() => setIsFlipped(!isFlipped)}
              />
            </>
          </ReactCardFlip>
        </>
        <S.MenuItemDescription>
          <S.MenuItemName>{menuItem.name}</S.MenuItemName>
          <>
            <S.MenuItemPrice>
              <span>Hot $ </span>
              {menuItem.priceHot}
            </S.MenuItemPrice>
            <S.MenuItemPrice>{hotCoffeeOnly()}</S.MenuItemPrice>
          </>
        </S.MenuItemDescription>
      </S.MenuItemCard>
    </>
  );
};

export default MenuItemCard;
