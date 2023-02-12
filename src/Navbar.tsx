import React from 'react';
import { useLocation } from 'react-router-dom';
import MainNav from './Header/MainNav';
import PhotoNav from './Header/PhotoNav';

const Navbar = ({ offEventHandelr }: { offEventHandelr: () => void }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' && <HomeNav offEventHandelr={offEventHandelr} />}
      {location.pathname === '/photo' && <PhotoBoard />}
      {location.pathname === '/contact' && <ServiceCenter />}
    </>
  );
}
const HomeNav = ({ offEventHandelr }: { offEventHandelr: () => void }) => {
  return <MainNav offEventHandelr={offEventHandelr} />
}
const PhotoBoard = () => {
  return <PhotoNav />
}
const ServiceCenter = () => {
  return (
    <></>
  );
}
export default Navbar;
