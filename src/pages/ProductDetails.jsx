import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromID } from '../services/api';
import RatingForm from '../components/RatingForm';
import { getProductsStorage } from '../services/storage';

class ProductDetails extends Component {
  state = {
    productName: '',
    productImage: '',
    productPrice: 0,
    thisProduct: '',
    myCart: 0,
  };

  async componentDidMount() {
    this.getProduct();
    const allItems = getProductsStorage();
    this.setState({ myCart: allItems.length });
  }

  getProduct = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const thisProduct = await getProductsFromID(id);
    console.log(thisProduct);
    const { thumbnail, price, title } = thisProduct;
    this.setState({
      productName: title,
      productImage: thumbnail,
      productPrice: price,
      thisProduct,
    });
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
    const { productName, productImage, productPrice, thisProduct, myCart } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        <img
          src={ productImage }
          alt={ productName }
          data-testid="product-detail-image"
        />
        <br />
        <h2 data-testid="product-detail-name">{productName}</h2>
        <span data-testid="product-detail-price">{productPrice}</span>
        <span data-testid="shopping-cart-size">{` ${myCart} `}</span>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.onClickAddToCart(thisProduct) }
        >
          Adicionar o Carrinho

        </button>
        <RatingForm id={ id } />
      </div>
    );
  }
}
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes
      .shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
  }).isRequired,
};
export default ProductDetails;
