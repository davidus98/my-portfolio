// src/components/About.js
import React from 'react';
import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.about}>
      <h1>/ about me</h1>
      <p>
        Hi, I'm  David, a software engineer currently working at Tracknamic. Currently learning React.js. Here are some technologies I have been working with:
      </p>
    <ul>
        <li>Javascript ES6+</li>
        <li>Node</li>
        <li>React.js</li>
        <li>Python</li>
        <li>Java</li>
        <li>Docker</li>
        <li>Redis</li>
    </ul>
    </section>
  );
}

export default About;
