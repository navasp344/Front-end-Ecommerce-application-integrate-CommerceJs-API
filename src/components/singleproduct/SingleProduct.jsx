
import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useCart } from '../../context/CartContext.jsx';


function SingleProduct() {
  const { productid } = useParams();
  const [product, setProduct] = useState({});
  const { addItemToCart } = useCart();
  


  useEffect(() => {
    fetch("https://api.chec.io/v1/products/" + productid, {
      headers: {
        "X-Authorization": "pk_56451b722edf4983236b159033b5a3fe67ea83b680964",
        "Content-Type": "application/json",
      },
    }).then((response) =>
      response.json().then((data) => {
        setProduct(data);
      })
    );
  }, [productid]);
  const handleAddToCart = () => {
    addItemToCart(product);
    alert('Product added to cart!');
  };


  return (
    <div className="container mx-auto  border-black	 mt-4 mb-4 ">
      <div className=" py-4 d-flex  ">
        <div className="" key={product.id}>
          <img
            src={product.image?.url}
            alt={product.name}
            height="400px"
            width="400px"
            className="mx-5"
          />
        </div>
        <div className="">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h3 className="display-6">{product.name}</h3>
          {product.price && (
            <h3 className="display-6 fw-bold my-4">{product.price.formatted_with_symbol}</h3>
          )}          <p dangerouslySetInnerHTML={{ __html: product.description }} />
          <button className="btn btn-outline-dark px-4 py-2" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <NavLink className="btn btn-dark ms-2 px-3 py-2" to='/cart'>Go to Cart</NavLink>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
