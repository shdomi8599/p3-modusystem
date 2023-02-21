import React from 'react';
import { useLocation } from 'react-router-dom';
import MainNav from './MainNav';
import BoardNav from './BoardNav';

const Navbar = ({ offEventHandelr }: { offEventHandelr: () => void }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' && <HomeNav offEventHandelr={offEventHandelr} />}
      {location.pathname === '/photo' && <Board />}
      {location.pathname === '/service' && <Board />}
      {location.pathname === '/login' && <Board />}
      {location.pathname === '/signUp' && <Board />}
    </>
  );
}
const HomeNav = ({ offEventHandelr }: { offEventHandelr: () => void }) => {
  return <MainNav offEventHandelr={offEventHandelr} />
}
const Board = () => {
  return <BoardNav />
}
export default Navbar;
