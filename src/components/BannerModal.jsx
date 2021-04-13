import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import * as S from "../styled/BannerModal-styling";
import covidMessage from "../constants/covidMessage";

const BannerModal = () => {
  // To hide other page content to be hidden while the modal is open
  // Accessibility reasons (from the react-modal documentation)
  Modal.setAppElement("#root");

  const [modalIsOpen, setModalIsOpen] = useState(() => false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <S.Banner>
      <S.ModalButton onClick={openModal}>{covidMessage.banner} </S.ModalButton>
      <Modal isOpen={modalIsOpen} style={S.modalCustomStyles}>
        <S.Title>{covidMessage.title}</S.Title>
        <S.Paragraph>{covidMessage.message}</S.Paragraph>
        <S.ModalCloseButton onClick={closeModal}>Close</S.ModalCloseButton>
      </Modal>
    </S.Banner>
  );
};

export default BannerModal;
