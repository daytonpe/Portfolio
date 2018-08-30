import React, { Component } from 'react';
import Experiences from './Experiences';
import Contact from './Contact';
import Hero from './Hero';
import Footer from './Footer';
import Biography from './Biography';
import Education from './Education';
import Adventure from './Adventure';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Biography />
        <Experiences />
        <Education />
        {/* <Adventure /> */}
        <Contact />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
