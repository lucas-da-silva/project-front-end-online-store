import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsStorage } from '../services/storage';

class ProductsList extends Component {
  onClickAddToCart = (product) => {
    const allItems = getProductsStorage();
    allItems.push({
      ...product,
      quantity: 1,
    });

    localStorage.setItem('products', JSON.stringify(allItems));
  };

  render() {
    const { products } = this.props;
    const { results } = products;
    return (
      <section>
        {
          results.length > 0 ? (results.map(({ title, id }, index) => (
            <div key={ id } data-testid="product">
              <p key={ id }>{title}</p>
              <button
                data-testid="product-add-to-cart"
                type="button"
                onClick={ () => this.onClickAddToCart(results[index]) }
              >
                Adicionar ao carrinho
              </button>
              <Link
                to={ `/productDetail/${id}` }
                data-testid="product-detail-link"
              >
                Produto
              </Link>
            </div>
          ))) : <p>Nenhum produto foi encontrado</p>
        }
      </section>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.shape({
    results: PropTypes.shape(),
  }).isRequired,
};

export default ProductsList;
