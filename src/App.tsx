import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ProductList from './ProductList';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
