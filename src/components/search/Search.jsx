import React, { useState, useEffect } from 'react';
import ProductCard from '../products/ProductCard';


const Search = ({ products }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    const handleInputChange = (e) => {
      const query = e.target.value;
      setSearchQuery(query);
  
      if (query.trim() === '') {
        setFilteredProducts([]);
      } else {
        setFilteredProducts(
          products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
          )
        );
      }
    };
  
    return (
      <div className="container-fluid text-center mt-5">
        <input
          type="text"
          placeholder='Search...'
          className='text-center'
          value={searchQuery}
          onChange={handleInputChange}
        />
        {searchQuery.trim() !== '' && (
          <div className="products_main">
            {filteredProducts.map(product => (
              <ProductCard product={product} key={product.id} />
            ))}
            {filteredProducts.length === 0 && <p className='text-center'>No products found.</p>}
          </div>
        )}
      </div>
    );
  };
  
  export default Search;