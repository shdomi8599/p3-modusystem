import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ProductList from './ProductList';
import { productList } from "./Data/productData"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Main />
      {productList.map((productList, i) => <ProductList key={i} productList={productList} />)}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
