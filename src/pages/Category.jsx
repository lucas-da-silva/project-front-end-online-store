import React, { Component } from 'react';
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
               />
               { name }
             </label>
           </div>
         ))}
       </div>
     );
   }
}

export default Category;
