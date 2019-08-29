import React from 'react';
// import logo from './logo.svg';
import './App.css';



import Header from './components/header';
import Search from './components/search';
import SideNav from './components/sidenav';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Header />
    <SideNav />
    <Search />
    <Footer />
    </>
  );
}

export default App;
