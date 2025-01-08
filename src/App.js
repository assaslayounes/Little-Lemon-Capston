import React from 'react';
import './App.css';
import Nav from './components/Nav';
import logo from './images/Logo.svg';
import bannerImg from './images/restauranfood.jpg';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import Menu from './components/Menu';

function App() {
  const items = ["HOME", "ABOUT", "MENU", "RESERVATIONS", "OREDER ONLINE", "LOGIN"];
  const availableTimes = ["12:00","13:00","14:00","15:00","16:00","17:00","17:00","18:00","19:00"];
  const occasion = ["Birthday", "Anniversary","business","casual"];
  return (
    <>
     <Nav logo={logo} items={items} />
     <Header bannerImg={bannerImg} />
     {/*<BookingForm availableTimes={availableTimes} occasion={occasion} /> */}
     <Menu />
    </>
  );
}

export default App;