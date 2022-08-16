import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsStorage } from '../services/storage';

class ProductsList extends Component {
  state = {
    myCart: 0,
  }

  componentDidMount() {
    const allItems = getProductsStorage();
    this.setState({ myCart: allItems.length });
  }

  onClickAddToCart = (product) => {
    const allItems = getProductsStorage();
    allItems.push({
      ...product,
    });
    this.setState({ myCart: allItems.length });
    localStorage.setItem('products', JSON.stringify(allItems));
  };

  render() {
    const { products } = this.props;
    const { myCart } = this.state;
    const { results } = products;
    return (
      <section>
        <span data-testid="shopping-cart-size">{` ${myCart} `}</span>
        {
          results.length > 0 ? (results.map(({ title, id, shipping }, index) => (
            <div key={ id } data-testid="product">
              <p key={ id }>{title}</p>
              <br />
              { shipping.free_shipping && (
                <span data-testid="free-shipping">Frete Gratis</span>) }
              <br />
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
              <hr />
            </div>
          ))) : <p>Nenhum produto foi encontrado</p>
        }
      </section>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.shape({
    results: PropTypes.arrayOf({
      title: PropTypes.string,
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default ProductsList;
