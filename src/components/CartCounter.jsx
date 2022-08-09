import React, { Component } from 'react';
import proptypes from 'prop-types';

class CartCounter extends Component {
    state = {
      counter: 1,
      totalValue: 0,
    }

    changeCounterUp = () => {
      const { itemPrice } = this.props;
      const { counter } = this.state;
      this.setState((previousCounter) => ({
        counter: previousCounter.counter + 1,
        totalValue: (counter + 1) * itemPrice,
      }));
    }

    changeCounterDown = () => {
      const { counter } = this.state;
      const { itemPrice } = this.props;
      const drecreaseCounter = Math.abs(counter - 1);
      const newDrecreaseCounter = counter === 1 ? 1 : drecreaseCounter;
      this.setState({
        counter: newDrecreaseCounter,
        totalValue: newDrecreaseCounter * itemPrice,
      });
    }

    render() {
      const { counter, totalValue } = this.state;
      return (
        <section>
          <div data-testid="shopping-cart-empty-message">
            <button
              data-testid="product-increase-quantity"
              type="button"
              onClick={ this.changeCounterUp }
            >
              +1

            </button>
            <input
              min="1"
              type="number"
              value={ counter }
              readOnly
            />
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ this.changeCounterDown }
            >
              -1

            </button>
            <div>{`Valor Total em R$ ${totalValue}`}</div>
          </div>
        </section>
      );
    }
}
CartCounter.propTypes = {
  itemPrice: proptypes.number.isRequired,
};
export default CartCounter;
