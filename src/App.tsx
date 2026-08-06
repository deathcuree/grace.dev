import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Toaster } from 'react-hot-toast';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

interface ScrollToState {
	scrollTo?: string;
}

const ScrollToSection = () => {
	const location = useLocation();
	useEffect(() => {
		const state = location.state as ScrollToState | null;
		if (state?.scrollTo) {
			scroller.scrollTo(state.scrollTo, {
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
	<div>
		<ScrollToSection />
		<Nav />
		<Hero />
		<Projects />
		<About />
		<Contact />
		<Footer />
	</div>
);

const App = () => {
	return (
		<Router>
			<Toaster position="top-right" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project/:projectId" element={<ProjectDetail />} />
			</Routes>
		</Router>
	);
};

export default App;
