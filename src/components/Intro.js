// src/components/Intro.js
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Intro.css';
import Card from './Card.js'


function Intro() {
  return (
    <section className="intro-section" id="home">
      <div className="intro-content">
      <Card />
        <h1>
          hi, <span className="highlight">David</span> here.
          <span>
            <Typewriter
              words={['']}
              loop={0} // Set loop to 0 for infinite typing
              cursor
              cursorStyle="|"
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p>I'm a software engineer from Oradea Romania. I'm passionate about full stack development.</p>
        <a href="#about" className="btn">Learn More About Me</a>
      </div>
    </section>
  );
}

export default Intro;
