import React, { Component } from 'react';
import { getProductsStorage } from '../services/storage';

class Cart extends Component {
  state = { products: [] };

  componentDidMount() {
    const products = getProductsStorage();
    this.setState({ products });
  }

  // getCartFromLocalStorage = () => {
  //   const cart = JSON.parse(localStorage.getItem('FE_CART')) || [];
  //   this.setState({ cart: [...cart] });
  // }

  render() {
    const { products } = this.state;
    return (
      <section>
        {
          products.length <= 0 ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          ) : (
            products.map(({ id, title, quantity }) => (
              <div key={ id }>
                <span data-testid="shopping-cart-product-name">
                  {title}
                </span>
                <br />
                <span data-testid="shopping-cart-product-quantity">
                  {quantity}
                </span>
              </div>
            ))
          )
        }
      </section>
    );
  }
}

export default Cart;
