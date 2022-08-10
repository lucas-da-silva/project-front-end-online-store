import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import { getProductsStorage } from '../services/storage';

class CheckoutProducts extends Component {
  state = {
    products: [],
    invalid: false,
    redirect: false,
    nameInput: '',
    emailInput: '',
    cpfInput: '',
    phoneInput: '',
    cepInput: '',
    addressInput: '',
    payment: '',
  }

  componentDidMount() {
    const products = JSON.parse(localStorage.getItem('products'));
    this.setState({ products });
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  finalizingPurchase = async () => {
    const { nameInput, emailInput, cpfInput, phoneInput, cepInput, addressInput,
      payment } = this.state;

    if (nameInput.length > 0 && emailInput.length > 0 && cpfInput.length > 0
        && phoneInput.length > 0 && cepInput.length > 0 && addressInput.length > 0
        && payment !== '') {
      localStorage.removeItem('products');
      this.setState({ redirect: true });
    }
    this.setState({ invalid: true });
  }

  render() {
    const { products, invalid, redirect } = this.state;
    return (
      <section>
        {
          redirect && <Redirect to="/" />
        }
        {
          products.length && (
            <div>
              {
                products.map(({ title, id }) => <p key={ id }>{title}</p>)
              }
              <form>
                <input
                  type="text"
                  name="nameInput"
                  onChange={ this.handleInputChange }
                  data-testid="checkout-fullname"
                  placeholder="Nome completo"
                />
                <input
                  type="email"
                  name="emailInput"
                  placeholder="Email"
                  onChange={ this.handleInputChange }
                  data-testid="checkout-email"
                />
                <input
                  type="text"
                  name="cpfInput"
                  placeholder="CPF"
                  onChange={ this.handleInputChange }
                  data-testid="checkout-cpf"
                />
                <input
                  type="text"
                  name="phoneInput"
                  placeholder="Telefone"
                  onChange={ this.handleInputChange }
                  data-testid="checkout-phone"
                />
                <input
                  type="text"
                  name="cepInput"
                  placeholder="CEP"
                  onChange={ this.handleInputChange }
                  data-testid="checkout-cep"
                />
                <input
                  type="text"
                  name="addressInput"
                  placeholder="Endereço"
                  onChange={ this.handleInputChange }
                  data-testid="checkout-address"
                />
                <input
                  type="radio"
                  name="payment"
                  value="Boleto"
                  onChange={ this.handleInputChange }
                  data-testid="master-payment"
                />
                <input
                  type="radio"
                  name="payment"
                  value="Visa"
                  onChange={ this.handleInputChange }
                  data-testid="ticket-payment"
                />
                <input
                  type="radio"
                  name="payment"
                  value="MasterCard"
                  onChange={ this.handleInputChange }
                  data-testid="visa-payment"
                />
                <input
                  type="radio"
                  name="payment"
                  value="Elo"
                  onChange={ this.handleInputChange }
                  data-testid="elo-payment"
                />
                <button
                  type="button"
                  data-testid="checkout-btn"
                  onClick={ this.finalizingPurchase }
                >
                  Comprar
                </button>
                {
                  invalid && <p data-testid="error-msg">Campos inválidos</p>
                }
              </form>
            </div>
          )
        }
      </section>
    );
  }
}

export default CheckoutProducts;
