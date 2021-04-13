import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Navigation from "./components/Navigation";

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <App />
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

export default Routes;
