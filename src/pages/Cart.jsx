import React, { Component } from 'react';
import CartCounter from '../components/CartCounter';

class Cart extends Component {
  render() {
    return (
      <section>
        <div data-testid="shopping-cart-empty-message">
          <div>
            Celular
            <label htmlFor="price">
              R$
              <input id="price" type="number" value={ 500 } readOnly />
            </label>
          </div>
          <CartCounter itemPrice={ 500 } />
        </div>
      </section>
    );
  }
}

export default Cart;
