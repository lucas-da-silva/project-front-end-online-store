import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Category from './Category';

class Home extends Component {
  state = {
    inputSearch: '',
    products: false,
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  clickCategory = async (product) => {
    const productsSearch = await getProductsFromCategoryAndQuery('', product);
    this.setState({ products: productsSearch });
  }

  render() {
    const { inputSearch, products } = this.state;
    return (
      <section>
        <input
          onChange={ this.handleChange }
          data-testid="query-input"
          type="text"
          name="inputSearch"
          value={ inputSearch }
          placeholder="Categoria"
        />
        <button
          onClick={ () => this.clickCategory(inputSearch) }
          type="button"
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {
          products && <ProductsList products={ products } />
        }
        <Category />
      </section>
    );
  }
}

export default Home;
