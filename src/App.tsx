import React from 'react';
import './App.css';
import Header from './components/NavbarScroller';
import BrandBanner from './components/BrandBanner';
import AboutMe from "./components/AboutMe";

function App() {
    return (
    <div className="App">
      <Header/>
      <BrandBanner/>
      <AboutMe/>
    </div>
  );
}

export default App;
