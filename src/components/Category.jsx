import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Category extends Component {
    state = {
      categories: [],
    }

    componentDidMount() {
      this.categories();
    }

   categories = async () => {
     const categories = await getCategories();
     this.setState({ categories: [...categories] });
   };

   render() {
     const { categories } = this.state;
     const { clickCategory } = this.props;
     return (
       <div>
         <p>Categorias</p>
         { categories.map(({ name, id }) => (
           <div key={ id }>
             <label
               htmlFor={ id }
               data-testid="category"
             >
               <input
                 type="radio"
                 id={ id }
                 name="categories"
                 value={ name }
                 onClick={ () => clickCategory(id, name) }
               />
               { name }
             </label>
           </div>
         ))}
       </div>
     );
   }
}

Category.propTypes = {
  clickCategory: PropTypes.func.isRequired,
};

export default Category;
