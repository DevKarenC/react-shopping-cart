import React from "react";
import { homepageText } from "../constants/homepageText";
import homepageImage from "../images/homepage/homepage-image.png";
import * as S from "../styled/Homepage-styling";

const Homepage = () => {
  return (
    <>
      <S.HomepageSection>
        <S.HomepageImage
          src={homepageImage}
          alt="2 cups of coffee on a wooden table"
        />
        <S.HomepageText>{homepageText}</S.HomepageText>
      </S.HomepageSection>
    </>
  );
};

export default Homepage;
