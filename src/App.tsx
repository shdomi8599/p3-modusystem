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
      <div id="productList_section">
      {productList.map((productList, i) => <ProductList key={i} productList={productList} />)}
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
