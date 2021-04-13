import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../images/homepage/algo-coffee-logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  Logo,
  NavMenuItemLink,
  NavMenuItemSpan,
  ShoppingCartButton,
} from "../styled/Navigation-styling";

const Navigation = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo src={logoImage} alt="Algo Coffee Logo" />
      </Link>
      <NavMenuItemLink to="/shop">
        <NavMenuItemSpan>SHOP</NavMenuItemSpan>
      </NavMenuItemLink>
      <NavMenuItemLink to="/menu">
        <NavMenuItemSpan>MENU</NavMenuItemSpan>
      </NavMenuItemLink>
      <NavMenuItemLink to="/cart">
        <ShoppingCartButton>
          <FontAwesomeIcon icon={faShoppingCart} />
        </ShoppingCartButton>
      </NavMenuItemLink>
    </Nav>
  );
};

export default Navigation;
