import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductsList extends Component {
  render() {
    const { products } = this.props;
    const { results } = products;
    return (
      <section>
        {
          results.length > 0 ? (results.map(({ title, id }) => (
            <div key={ id } data-testid="product">
              <p key={ id }>{title}</p>
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
