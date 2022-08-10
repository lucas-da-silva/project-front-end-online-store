import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import CheckoutProducts from './pages/CheckoutProducts';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/productDetail/:id" component={ ProductDetails } />
        <Route exact path="/checkoutProducts" component={ CheckoutProducts } />
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
