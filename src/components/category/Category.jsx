import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'


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

const Category = () => {
    const [category, setcategory] = useState([]);
    useEffect(() => {
        fetch("https://api.chec.io/v1/categories", {
          headers: {
            'X-Authorization': 'pk_56451b722edf4983236b159033b5a3fe67ea83b680964',
            "Content-Type": "application/json", 
          } 
        }).then(response =>
            response.json().then(category => {
              setcategory(category.data);
            })
        );
      }, []);

    

  return (
    <>
    <div className="container gx-0 py-5 my-5 full_main_category">
        <h2 className='ms-3 py-3 '>Category</h2>
        <hr/>
        <div className="row gx-0 main_category">
        {category.length > 0 ? (
              category.map((category) => (
                <CategoryCard  category={category}  />
              ))
            ) : (
              <p>Loading...</p>
            )}
        </div>
    </div>

    </>
  )
}

export default Category