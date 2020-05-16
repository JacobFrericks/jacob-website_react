import React from 'react';
import './App.css';
import Header from './components/NavbarScroller';
import BrandBanner from './components/BrandBanner';
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import WorkExperience from "./components/WorkExperience";
import ContactMe from "./components/ContactMe";

function App() {
    return (
    <div className="App">
      <Header/>
      <BrandBanner/>
      <AboutMe/>
      <Portfolio/>
      <WorkExperience/>
      <ContactMe/>
    </div>
  );
}

export default App;
