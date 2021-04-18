import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logoImage from "../images/homepage/algo-coffee-logo-white.png";
import * as S from "../styled/Navigation-styling";

const Navigation = () => {
  return (
    <S.Nav>
      <Link to="/">
        <S.Logo src={logoImage} alt="Algo Coffee Logo" />
      </Link>
      <S.NavMenuItemLink to="/shop">
        <S.NavMenuItemSpan>SHOP</S.NavMenuItemSpan>
      </S.NavMenuItemLink>
      <S.NavMenuItemLink to="/menu">
        <S.NavMenuItemSpan>MENU</S.NavMenuItemSpan>
      </S.NavMenuItemLink>
      <S.NavMenuItemLink to="/cart">
        <S.ShoppingCartButton>
          <FontAwesomeIcon icon={faShoppingCart} />
        </S.ShoppingCartButton>
      </S.NavMenuItemLink>
    </S.Nav>
  );
};

export default Navigation;
