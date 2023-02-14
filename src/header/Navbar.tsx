import React from 'react';
import { useLocation } from 'react-router-dom';
import MainNav from './MainNav';
import PhotoNav from './PhotoNav';

const Navbar = ({ offEventHandelr }: { offEventHandelr: () => void }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' && <HomeNav offEventHandelr={offEventHandelr} />}
      {location.pathname === '/photoBoard' && <Board />}
      {location.pathname === '/contact' && <ServiceCenter />}
    </>
  );
}
const HomeNav = ({ offEventHandelr }: { offEventHandelr: () => void }) => {
  return <MainNav offEventHandelr={offEventHandelr} />
}
const Board = () => {
  return <PhotoNav />
}
const ServiceCenter = () => {
  return (
    <></>
  );
}
export default Navbar;
