import React from 'react';
import './App.css';
import Header from './components/NavbarScroller';
import BrandBanner from './components/BrandBanner';
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

function App() {
    return (
    <div className="App">
      <Header/>
      <BrandBanner/>
      <AboutMe/>
      <Portfolio/>
    </div>
  );
}

export default App;
