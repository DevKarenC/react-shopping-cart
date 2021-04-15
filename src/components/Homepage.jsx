import React from "react";
import mainText from "../constants/mainText";
import homepageImage from "../images/homepage/homepage-image.png";
import * as S from "../styled/Homepage-styling";

const Homepage = () => {
  return (
    <S.MainSection>
      <S.MainImage
        src={homepageImage}
        alt="2 cups of coffee on a wooden table"
      />
      <S.MainText>{mainText}</S.MainText>
    </S.MainSection>
  );
};

export default Homepage;
