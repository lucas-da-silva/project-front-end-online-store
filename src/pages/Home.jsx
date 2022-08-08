import React, { Component } from 'react';
import ProductsList from '../components/ProductsList';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  state = {
    inputSearch: '',
    productsSearch: false,
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  clickCategory = async (product) => {
    const productsSearch = await getProductsFromCategoryAndQuery(product);
    this.setState({ productsSearch });
  }

  render() {
    const { inputSearch, productsSearch } = this.state;
    if (productsSearch && productsSearch.results.length > 0) {
      console.log('maior');
    }
    // console.log(productsSearch);
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
        {
          productsSearch && productsSearch.results && <ProductsList productsSearch={ productsSearch } />
        }
        {/* {
          productsSearch && productsSearch.results.length === 0
            && <p>Nenhum produto foi encontrado</p>
        } */}
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default Home;
