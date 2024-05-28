import ProductCard from './ProductCard';
import '../../styles/Products.css';
import { useEffect, useState } from 'react';


const skeletonContainerStyle = {
  display: "flex",
};

const skeletonItemStyle = {
  width: "250px", 
  height: "350px", 
  margin: "20px",
  backgroundColor: "#f0f0f0", 
  borderRadius: "5px" ,
};

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.chec.io/v1/products", {
      headers: {
        'X-Authorization': 'pk_56451b722edf4983236b159033b5a3fe67ea83b680964',
        "Content-Type": "application/json", 
      } 
    }).then(response =>
        response.json().then(products => {
          setProducts(products.data);
        })
    );
  }, []);

  return (
    <div className="container gx-0 py-5">
      <h2 className='product_h2 pb-4'>Popular Products</h2>
      <hr />
      <div className="row gx-0">
          <div className="col-md-12">
            <div className="products_main ">
              {products.length === 0 ? (
                <div style={skeletonContainerStyle}>
                  {[...Array(4)].map((_, index) => (
                    <div style={skeletonItemStyle} key={index}></div>
                  ))}
                </div>
              ) : (
                products.length > 0 ? (
                  products.map((product) => <ProductCard product={product} key={product.id} />)
                ) : (
                  <p>No products found.</p>
                )
              )}
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProductList;