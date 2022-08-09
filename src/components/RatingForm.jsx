import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RATING_1 = 1;
const RATING_2 = 2;
const RATING_3 = 3;
const RATING_4 = 4;
const RATING_5 = 5;

const RATING_NUMBERS = [RATING_1, RATING_2, RATING_3, RATING_4, RATING_5];

class RatingForm extends Component {
  state = {
    invalid: false,
    emailInput: '',
    detailInput: '',
    rating: 0,
    evaluations: [],
  }

  componentDidMount() {
    const { id } = this.props;
    const oldsEvaluations = JSON.parse(localStorage.getItem(id));
    if (oldsEvaluations) {
      this.setState({ evaluations: oldsEvaluations });
    }
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => {
      this.validationButton();
    });
  }

  addRating = () => {
    const { id } = this.props;

    this.setState(({ emailInput, rating, detailInput, evaluations }) => {
      const newEvaluation = {
        id,
        emailInput,
        rating,
        detailInput,
      };

      if (this.validationButton()) {
        const newEvaluations = [...evaluations, newEvaluation];
        localStorage.setItem(id, JSON.stringify(newEvaluations));
        return {
          invalid: false,
          emailInput: '',
          detailInput: '',
          rating: 0,
          evaluations: newEvaluations,
        };
      }
      return { invalid: true };
    });
  }

  validationButton = () => {
    const { emailInput, rating } = this.state;
    const regex = /\S+@\S+\.\S+/;
    return !!(regex.test(emailInput) && rating > 0);
  }

  render() {
    const { evaluations, emailInput, detailInput, invalid } = this.state;
    return (
      <section>
        <form>
          <input
            type="text"
            placeholder="Email"
            name="emailInput"
            value={ emailInput }
            onChange={ this.handleInputChange }
            data-testid="product-detail-email"
          />
          {
            RATING_NUMBERS.map((n) => (
              <input
                type="radio"
                key={ n }
                name="rating"
                value={ n }
                onChange={ this.handleInputChange }
                data-testid={ `${n}-rating` }
              />
            ))
          }
          <input
            type="text"
            placeholder="Mensagem (opcional)"
            name="detailInput"
            value={ detailInput }
            onChange={ this.handleInputChange }
            data-testid="product-detail-evaluation"
          />
          <button
            type="button"
            data-testid="submit-review-btn"
            onClick={ this.addRating }
          >
            Avaliar
          </button>
          {
            invalid && <p data-testid="error-msg">Campos inválidos</p>
          }
        </form>
        {
          evaluations.length > 0 && (
            <section>
              {
                evaluations.map((evaluation) => (
                  <div data-testid="review-card-evaluation" key={ evaluation.emailInput }>
                    <p data-testid="review-card-email">{evaluation.emailInput}</p>
                    <span data-testid="review-card-rating">{evaluation.rating}</span>
                    {
                      evaluation.detailInput && <p>{evaluation.detailInput}</p>
                    }
                  </div>
                ))
              }
            </section>
          )
        }
      </section>
    );
  }
}

RatingForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RatingForm;
