import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <section>
        <input type="text" placeholder="Categoria" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default Home;
