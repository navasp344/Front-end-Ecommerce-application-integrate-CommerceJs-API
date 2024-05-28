import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ProductList from './components/products/ProductsList';
import SingleProduct from './components/singleproduct/SingleProduct';
import CategoryProductList from './components/category/CategoryProductList';
import Cart from './components/cart/Cart';
import Search from './components/search/Search';
import SearchData from './components/search/Searchdata';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/search' element={<SearchData />} />
          <Route path='/products' element={<ProductList />} />
          <Route path="/products/:productid" element={<SingleProduct/>}></Route>
          <Route path="/categories/:categoryid" element={<CategoryProductList />}></Route>
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
