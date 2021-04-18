import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import BannerModal from "./components/BannerModal";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import * as S from "./styled/Global-styling";

const App = () => {
  const [cartItems, setCartItems] = useState(() => []);

  // const handleAddToCart = (id, name, price, qty, imgSrc, imgAlt) => {
  const handleAddToCart = (item, qty) => {
    setCartItems((prevCartItems) => {
      return [...prevCartItems, { ...item, qty }];
    });
  };

  // allow the Cart component to retrieve the cartItems from App
  const getCartItems = () => {
    return cartItems;
  };

  // display pop-up for 3 seconds to let user know the item has been successfully added to the cart
  const addToCartSuccessPopup = () => {
    // console.log("clicked!");
  };

  // update the quantity badge next to the mini cart icon on the nav bar
  const updateNavCartBadge = () =>
    cartItems.reduce((total, cur) => total + cur.qty, 0);

  return (
    <Router>
      <S.GlobalStyle />
      <Navigation updateNavCartBadge={updateNavCartBadge} />
      <BannerModal />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/shop">
          <Shop
            handleAddToCart={handleAddToCart}
            addToCartSuccessPopup={addToCartSuccessPopup}
          />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/cart">
          <Cart getCartItems={getCartItems} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
