import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {
  
  const [contactSelected, setContactSelected]= useState(false);
  
  return (
    <div >
      <Header
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Header>
      <main>
        <About/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
