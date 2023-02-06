import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ProductListSection from './ProductListSection';
import TopBtn from './TopBtn';



function App() {

  return (
    <BrowserRouter>
      <Header />
      <Main />
      <TopBtn />
      <ProductListSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
