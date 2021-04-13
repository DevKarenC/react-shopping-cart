import React, { useState, useEffect } from "react";
import logoImage from "../images/homepage/algo-coffee-logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  Logo,
  NavMenuItem,
  NavMenuItemSpan,
  ShoppingCartButton,
} from "../styled/Navigation-styling";

const Navigation = () => {
  return (
    <Nav>
      <Logo src={logoImage} alt="Algo Coffee Logo" />
      <NavMenuItem>
        <NavMenuItemSpan>SHOP</NavMenuItemSpan>
      </NavMenuItem>
      <NavMenuItem>
        <NavMenuItemSpan>MENU</NavMenuItemSpan>
      </NavMenuItem>
      <ShoppingCartButton>
        <FontAwesomeIcon icon={faShoppingCart} />
      </ShoppingCartButton>
    </Nav>
  );
};

export default Navigation;
