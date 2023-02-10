import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import ProductListSection from './ProductListSection/ProductListSection';
import TopBtn from './Header/TopBtn';

function App() {

  //상세보기 페이지 off 기능
  const [offEvent, setOffEvent] = useState(true)
  const offEventHandelr = () => {
    setOffEvent(!offEvent)
  }
  return (
    <BrowserRouter>
      <Header offEventHandelr={offEventHandelr} />
      <Main offEventHandelr={offEventHandelr} />
      <TopBtn offEventHandelr={offEventHandelr} />
      <ProductListSection offEvent={offEvent} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
