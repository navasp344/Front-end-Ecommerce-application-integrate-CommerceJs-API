import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../products/ProductCard";

const skeletonContainerStyle = {
  display: "flex",
};

const skeletonItemStyle = {
  width: "250px",
  height: "350px",
  margin: "30px",
  backgroundColor: "#f0f0f0",
  borderRadius: "5px",
};

function CategoryProductlist() {
  const { categoryid } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState([]);




  useEffect(() => {
    fetch(`https://api.chec.io/v1/products?category_id=${categoryid}`, {
      headers: {
        "X-Authorization": "pk_56451b722edf4983236b159033b5a3fe67ea83b680964",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((product) => {
        const categoryname = product.data[0].categories[0].name;
        setProducts(product.data);
        setCategoryName(categoryname);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

  }, []);

  return (
    <>
      <div className="container-fluid px-3 py-4">
        <h3>{categoryName}</h3>
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
    </>
  );
}

export default CategoryProductlist;