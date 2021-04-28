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

  const handleAddToCart = (item, qty) => {
    let isClicked = false;
    if (!isClicked) {
      setCartItems((prevCartItems) => {
        // if the same item already exists in the cart, update quantity
        if (prevCartItems.find((el) => el.id === item.id)) {
          const uniqueItems = prevCartItems.filter(
            (prevItem) => prevItem.id !== item.id
          );
          const duplicateItem = prevCartItems.filter(
            (prevItem) => prevItem.id === item.id
          );
          duplicateItem[0].qty += qty;
          isClicked = true;
          return [...uniqueItems, ...duplicateItem];
          // if there are no duplicate items, append the new item to the existing cart items
        } else {
          isClicked = true;
          return [...prevCartItems, { ...item, qty }];
        }
      });
    }
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
          <Cart handleAddToCart={handleAddToCart} getCartItems={getCartItems} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
