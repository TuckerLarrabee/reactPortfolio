import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio';

function App() {
  
  const [contactSelected, setContactSelected]= useState(false);
  
  return (
    <>
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ></Header>
        <Hero/>
        <About/>
        <Portfolio/>
        <Contact/>       
      <Footer/>
    </>
  );
}

export default App;
