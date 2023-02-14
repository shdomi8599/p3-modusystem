import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './footer/Footer';
import Home from './home/Home';
import Navbar from './header/Navbar';
import PhotoBoard from './photoBoard/PhotoBoard';

function App() {
  //상세보기 페이지 off 기능
  const [offEvent, setOffEvent] = useState(true)
  const offEventHandelr = () => {
    setOffEvent(!offEvent)
  }

  return (
    <BrowserRouter>
      <Navbar offEventHandelr={offEventHandelr} />
      <Routes>
        <Route path='/' element={<Home offEvent={offEvent} offEventHandelr={offEventHandelr} />} />
        <Route path='/photoBoard' element={<PhotoBoard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
