// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Stars from './components/Stars'
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
       <Stars/>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
