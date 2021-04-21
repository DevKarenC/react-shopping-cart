import styled from "styled-components";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  background-color: #8c6d56;
  padding: 0.3rem 0;
  margin-bottom: 3rem;
`;

const ModalButton = styled.button`
  background-color: transparent;
  font-family: "Barlow", sans-serif;
  font-size: 1.1rem;
  letter-spacing: 1px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const ModalCloseButton = styled(ModalButton)`
  background-color: #e2dad5;
  color: #000000;
  border-radius: 10px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.5rem;
  margin-top: 1rem;
  width: 6rem;
`;

const Title = styled.h1`
  font-family: "Barlow", sans-serif;
  font-size: 2rem;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 2rem;
  text-align: center;
`;

const modalCustomStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "60vw",
    padding: "2rem 3rem",
  },
};

export {
  Banner,
  ModalButton,
  ModalCloseButton,
  Title,
  Paragraph,
  modalCustomStyles,
};
