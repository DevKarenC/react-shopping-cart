import styled from "styled-components";

const Footer = styled.footer`
  margin-top: auto;
`;

const Creator = styled.p`
  font-family: "Barlow", cursive;
  font-size: 1.25rem;
  letter-spacing: 2px;
  text-align: center;
  height: 32px;
  margin-bottom: 1rem;
`;

const GithubLink = styled.a`
  color: #000;
  text-decoration: none;
`;

const GithubLogo = styled.img`
  width: 28px;
  height: auto;
  margin: auto;
  vertical-align: text-top;
  display: inline-block;
`;

export { Footer, Creator, GithubLink, GithubLogo };
