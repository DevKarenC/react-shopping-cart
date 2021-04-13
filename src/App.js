import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import BannerModal from "./components/BannerModal";

const App = () => {
  return (
    <Router>
      <Navigation />
      <BannerModal />
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
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
    </Router>
  );
};

export default App;
