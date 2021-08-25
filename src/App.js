import React, { useState } from "react";
import Navbar from "./components/UI/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Parks from "./pages/Parks";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <Router>
        <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Navbar onShowCart={showCartHandler}/>
        </CartProvider>
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/parks" component={Parks} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
