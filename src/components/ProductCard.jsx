import React, { useState } from "react";
import Modal from "react-modal";
import * as S from "../styled/Shop-styling";

function ProductCard(props) {
  const [quantity, setQuantity] = useState(() => 1);
  const [cartItems, addToCart] = useState(() => []);

  const onClickAddToCart = () => {
    const cartItemsCopy = cartItems.slice();

    addToCart();
  };

  const isLimited = () => {
    return props.product.limited ? (
      <>
        <span>Limited </span>
      </>
    ) : null;
  };

  const isOnSale = () => {
    return props.product.onSale ? (
      <>
        <span>On Sale</span>
      </>
    ) : null;
  };

  // modal functions
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <S.ProductCard>
        <div className="product-image">
          <S.ProductImage
            src={props.product.imgSrc}
            alt={props.product.imgAlt}
            onClick={openModal}
          />
        </div>
        <div className="product-description">
          <div className="product-name" onClick={openModal}>
            {props.product.name}
          </div>
          <div className="product-price">$ {props.product.price}</div>
          <div className="product-specials">
            {isLimited()}
            {isOnSale()}
          </div>
        </div>
        <div className="product-options">
          <div className="product-quantity">
            <span>Quantity</span>
            <input type="number" />
          </div>
          <div>
            <button onClick={onClickAddToCart} className="add-to-cart">
              ADD TO CART
            </button>
          </div>
          <button onClick={openModal}>VIEW PRODUCT</button>
          <Modal isOpen={modalIsOpen}>
            <div>
              <button className="btn-close-modal" onClick={closeModal}>
                Close
              </button>
            </div>
            <div className="product-container-modal">
              <div>
                <img
                  src={props.product.imgSrc}
                  alt={props.product.imgAlt}
                  className="product-img-modal"
                />
              </div>
              <div>
                <div className="product-description-modal">
                  <div className="product-name" onClick={openModal}>
                    {props.product.name}
                  </div>
                  <div className="product-price">$ {props.product.price}</div>
                  <div className="product-specials">
                    {isLimited()}
                    {isOnSale()}
                  </div>
                </div>
                <div className="product-options">
                  <div className="product-quantity">
                    <span>Quantity</span>
                    <input type="number" />
                  </div>
                  <div>
                    <button onClick={onClickAddToCart} className="add-to-cart">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </S.ProductCard>
    </div>
  );
}

export default ProductCard;
