import React from 'react';
import './App.scss';
import Header from './components/NavbarScroller';
import BrandBanner from './components/BrandBanner';
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import WorkExperience from "./components/WorkExperience";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
    return (
    <div className="App">
      {/*<Header/>*/}
      <BrandBanner/>
      <AboutMe/>
      <Portfolio/>
      <Blog/>
      {/*<WorkExperience/>*/}
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
