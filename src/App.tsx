import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ProductListSection from './ProductListSection';
import TopBtn from './TopBtn';
import Form from './MailForm';

function App() {

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
