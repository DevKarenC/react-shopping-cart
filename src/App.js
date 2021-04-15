import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as S from "./styled/Global-styling";
import Navigation from "./components/Navigation";
import BannerModal from "./components/BannerModal";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

const App = () => {
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
          {/* <Shop /> */}
        </Route>
        <Route exact path="/menu">
          {/* <Menu /> */}
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
