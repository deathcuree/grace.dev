import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
