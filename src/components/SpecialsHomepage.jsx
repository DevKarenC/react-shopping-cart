import React from "react";
import {
  homepageSpecialsText,
  homepageSpecialsButtonText,
} from "../constants/homepageText";
import * as S from "../styled/SpecialsHomepage-styling";

const SpecialsHomepage = () => {
  return (
    <S.SpecialsSection>
      <S.SpecialsText>{homepageSpecialsText}</S.SpecialsText>
      <S.ShopNowButton>{homepageSpecialsButtonText}</S.ShopNowButton>
    </S.SpecialsSection>
  );
};

export default SpecialsHomepage;
