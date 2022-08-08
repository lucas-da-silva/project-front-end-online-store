import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

class Home extends Component {
  render() {
    return (
      <section>
        <input type="text" placeholder="Categoria" />
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Category />
      </section>
    );
  }
}

export default Home;
