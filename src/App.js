import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import ProjectDetail from './components/ProjectDetail';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
            <Header />
            <Banner />
            <Nav />
            <About />
            <Project />
            <Contact />
          </div>
        } />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
