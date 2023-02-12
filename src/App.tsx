import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar';
import PhotoBoard from './PhotoBoard/PhotoBoard';

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
        <Route path='/photo' element={<PhotoBoard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
