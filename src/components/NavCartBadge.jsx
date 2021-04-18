import React, { useEffect } from "react";
import * as S from "../styled/Cart-styling";

const NavCartBadge = ({ updateNavCartBadge }) => {
  return <S.Badge>{updateNavCartBadge()}</S.Badge>;
};

export default NavCartBadge;
