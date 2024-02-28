import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import React from 'react';

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
