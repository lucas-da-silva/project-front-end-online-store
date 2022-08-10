import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromID } from '../services/api';
import RatingForm from '../components/RatingForm';

class ProductDetails extends Component {
    state = {
      productName: '',
      productImage: '',
      productPrice: 0,
    };

    async componentDidMount() {
      this.getProduct();
    }

    getProduct = async () => {
      const { match } = this.props;
      const { params } = match;
      const { id } = params;
      const thisProduct = await getProductsFromID(id);
      const { thumbnail, price, title } = thisProduct;
      this.setState({
        productName: title,
        productImage: thumbnail,
        productPrice: price,
      });
    }

    render() {
      const { productName, productImage, productPrice } = this.state;
      const { match: { params: { id } } } = this.props;
      return (
        <div>
          <Link to="/cart" data-testid="shopping-cart-button">Adicionar ao Carrinho</Link>
          <img
            src={ productImage }
            alt={ productName }
            data-testid="product-detail-image"
          />
          <br />
          <h2 data-testid="product-detail-name">{ productName }</h2>
          <span data-testid="product-detail-price">{ productPrice }</span>
          <RatingForm id={ id } />
        </div>
      );
    }
}
ProductDetails.propTypes = {
  match: PropTypes.shape({ params: PropTypes
    .shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }) }).isRequired,
};
export default ProductDetails;
