import React from "react";
import githubLogo from "../images/social-icons/Github-logo.png";
import * as S from "../styled/Footer";

const Footer = () => {
  return (
    <S.Footer>
      <S.Creator>
        Created By {""}
        <S.GithubLink
          href="https://github.com/DevKarenC/react-shopping-cart"
          target="blank"
        >
          DevKarenC {""}
          <S.GithubLogo src={githubLogo} alt="Github Logo" />
        </S.GithubLink>
      </S.Creator>
    </S.Footer>
  );
};

export default Footer;
