import React from 'react'
import Banner from './Banner'
import Footer from '../footer/Footer'
import Offer from '../offer/Offer'
import ProductList from '../products/ProductsList'
import Category from '../category/Category'

const Home = () => {
  return (
    <>
    <Banner/>
    <Offer/>
    <Category/>
    <ProductList/>
    <Footer/>
    </>


  )
}

export default Home