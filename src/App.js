import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />
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
