import styled from "styled-components";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem 3rem;
`;

const Logo = styled.img`
  width: 180px;
  height: auto;
  cursor: pointer;
`;

const NavMenuItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-size: 1.25rem;
  letter-spacing: 1px;
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
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: #7b4819;

  &:hover {
    color: #461220;
  }
`;

export { Nav, Logo, NavMenuItem, NavMenuItemSpan, ShoppingCartButton };
