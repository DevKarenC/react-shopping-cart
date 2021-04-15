import styled from "styled-components";

const MainSection = styled.div`
  display: inline-block;
  position: relative;
`;

const MainImage = styled.img`
  display: block;
  height: auto;
  width: 100vw;
`;

const MainText = styled.p`
  position: absolute;
  top: 28%;
  transform: translate(7%);
  color: white;
  font-family: "Barlow", sans-serif;
  font-size: 5vw;
  letter-spacing: 1vw;
  text-transform: uppercase;
  max-width: 50vw;
  max-height: 70vh;
  margin: 0 0 1em;
  line-height: 1.4285em;
`;

export { MainSection, MainImage, MainText };
