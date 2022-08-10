import React, { Component } from 'react';
import { getProductsStorage } from '../services/storage';
import CartCounter from '../components/CartCounter';

class Cart extends Component {
  state = { products: [] };

  componentDidMount() {
    const products = getProductsStorage();
    this.setState({ products });
  }

  removeItem = ({ target }) => {
    const { id } = target;
    const { products } = this.state;
    const newProductsList = products.filter((item) => item.id !== id);
    this.setState({ products: newProductsList });
    localStorage.clear();
    localStorage.setItem('products', JSON.stringify(newProductsList));
  }

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
            products.map(({ id, title, price }) => (
              <div id={ id } key={ id }>
                <span data-testid="shopping-cart-product-name">
                  {title}
                </span>
                <span>{ ` / Valor R$ ${price}` }</span>
                <br />
                <CartCounter
                  itemPrice={ price }
                  removeItem={ this.removeItem }
                  itemID={ id }
                />
                <hr />
              </div>
            ))
          )
        }
      </section>
    );
  }
}

export default Cart;
