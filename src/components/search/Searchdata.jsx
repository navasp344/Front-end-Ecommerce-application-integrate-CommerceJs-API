import React, { useEffect, useState } from 'react';
import ProductList from '../products/ProductsList';
import Search from './Search';
import '../../styles/Search.css'

const SearchData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.chec.io/v1/products", {
      headers: {
        'X-Authorization': 'pk_56451b722edf4983236b159033b5a3fe67ea83b680964',
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
    .then(data => {
      setProducts(data.data);
    })
    .catch(error => console.error('Error fetching products:', error));
  }, []);
  return (
    <div>
{<Search products={products} />}
    </div>
  );
};

export default SearchData;