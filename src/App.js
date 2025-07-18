import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import ProjectDetail from './components/ProjectDetail';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const ScrollToSection = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80,
      });
    }
  }, [location]);
  return null;
};

const Home = () => (
  <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
    <ScrollToSection />
    <Header />
    <Banner />
    <Nav />
    <About />
    <Project />
    <Contact />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
