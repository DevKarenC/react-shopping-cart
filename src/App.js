import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import BannerModal from "./components/BannerModal";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
// import Cart from "./components/Cart"
import Footer from "./components/Footer";
import * as S from "./styled/Global-styling";

const App = () => {
  const handleAddToCart = (name, id, qty) => {
    console.log({ name, id, qty });
  };

  return (
    <Router>
      <S.GlobalStyle />
      <Navigation />
      <BannerModal />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/shop">
          <Shop handleAddToCart={handleAddToCart} />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/cart">
          {/* <Cart /> */}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
