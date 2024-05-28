import React from 'react'
import '../../styles/Category.css'
import { Link } from 'react-router-dom'
const CategoryCard = ({category}) => {
  return (
    <>
    
      <Link to={/categories/+category.id} className="col-md-2 col-6">
        <div className="home_category text-center">
          <img src={category.assets[0].url} alt="" className='' width='100px' height='75px' />
          <h5 className='category_title'>{category.name}</h5>
          
        </div>
      </Link>

    </>
  )
}
export default CategoryCard