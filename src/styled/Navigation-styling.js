import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1.5rem 3rem 1rem;
`;

const Logo = styled.img`
  width: 180px;
  height: auto;
  cursor: pointer;
`;

const NavMenuItemLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-decoration: none;
  color: #000000;
  cursor: pointer;
`;

const NavMenuItemSpan = styled.span`
  &:hover {
    margin-bottom: -2px;
    border-bottom: 2px solid #8c6d56;
  }
`;

const ShoppingCartButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50%;
  background-color: #f2edde;
  cursor: pointer;
  font-size: 1.25rem;
  color: #7b4819;

  &:hover {
    color: #461220;
  }
`;

export { Nav, Logo, NavMenuItemLink, NavMenuItemSpan, ShoppingCartButton };
