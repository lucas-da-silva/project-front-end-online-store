import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsList extends Component {
  render() {
    const { productsSearch } = this.props;
    const { results } = productsSearch;
    return (
      <section>
        {
          results.map(({ title, id }) => (
            <div key={ id } data-testid="product">
              <p key={ id }>{title}</p>
            </div>
          ))
        }
      </section>
    );
  }
}

ProductsList.propTypes = {
  productsSearch: PropTypes.shape({
    results: PropTypes.shape(),
  }).isRequired,
};

export default ProductsList;
