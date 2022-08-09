import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/" component={ Home } />
        <Route exact path="/productDetail/:id" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
