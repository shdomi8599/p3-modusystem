import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home';
import PhotoBoard from './PhotoBoard';

function App() {

  //상세보기 페이지 off 기능
  const [offEvent, setOffEvent] = useState(true)
  const offEventHandelr = () => {
    setOffEvent(!offEvent)
  }
  return (
    <BrowserRouter>
      <Header offEventHandelr={offEventHandelr} />
      <Routes>
        <Route path='/' element={<Home offEvent={offEvent} offEventHandelr={offEventHandelr} />} />
        <Route path='photo' element={<PhotoBoard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
