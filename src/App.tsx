import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { SECTION_PATHS } from './constants/sections';

// Each shareable path on the home page maps to the id of the section it scrolls to.
const sectionByPath = Object.fromEntries(Object.entries(SECTION_PATHS).map(([id, path]) => [path, id]));

const HEADER_OFFSET = 80;

// The section currently at the top of the viewport, or the last one once the page is scrolled to the bottom.
const currentSectionId = () => {
	const ids = Object.keys(SECTION_PATHS);
	if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) return ids[ids.length - 1];
	let current = ids[0];
	for (const id of ids) {
		const el = document.getElementById(id);
		if (el && el.getBoundingClientRect().top <= HEADER_OFFSET + 40) current = id;
	}
	return current;
};

// Keeps the URL and the scroll position in sync: visiting a section path scrolls to it,
// and scrolling by hand swaps the URL to the section in view.
const SectionRouting = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const handledKey = useRef<string | null>(null);
	const pathSetByScroll = useRef<string | null>(null);
	// The path React has rendered; the address bar can run ahead of it while a navigation is pending.
	const renderedPath = useRef(location.pathname);
	// Set while the page is smooth-scrolling to a section, so the URL isn't rewritten mid-animation.
	const autoScroll = useRef<(() => void) | null>(null);

	const syncUrlToScroll = useCallback(() => {
		// Read the live URL: a link click may already have moved to another page or section.
		const current = window.location.pathname;
		if (autoScroll.current || current !== renderedPath.current || !(current in sectionByPath)) return;
		const path = SECTION_PATHS[currentSectionId() as keyof typeof SECTION_PATHS];
		if (path === current) return;
		pathSetByScroll.current = path;
		navigate(path, { replace: true });
	}, [navigate]);

	// A layout effect starts the scroll before the next paint, ahead of any queued scroll-to-URL update.
	useLayoutEffect(() => {
		renderedPath.current = location.pathname;
		// Effects can re-run for the same navigation (e.g. React strict mode); handle each one once.
		if (handledKey.current === location.key) return;
		const firstRender = handledKey.current === null;
		handledKey.current = location.key;
		if (pathSetByScroll.current === location.pathname) {
			pathSetByScroll.current = null;
			// Scrolling may have continued while this update was pending; catch up once it has rendered.
			requestAnimationFrame(syncUrlToScroll);
			return;
		}
		const sectionId = sectionByPath[location.pathname];
		// "Back to projects" passes the project it came from, so the page returns to that card.
		const projectId = (location.state as { projectId?: string } | null)?.projectId;
		const el =
			(projectId && document.getElementById(`project-${projectId}`)) || (sectionId && document.getElementById(sectionId));
		// A fresh load of "/" stays at the top; every other visit scrolls to its section.
		if (!el || (firstRender && sectionId === 'home')) return;
		const top = sectionId === 'home' ? 0 : el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
		if (firstRender || Math.abs(top - window.scrollY) < 2) {
			window.scrollTo({ top });
			return;
		}
		autoScroll.current?.();
		// The page can't scroll past its end, so the scroll may stop short of the section.
		const target = Math.min(top, document.documentElement.scrollHeight - window.innerHeight);
		const finish = () => {
			window.clearTimeout(timeout);
			window.removeEventListener('scrollend', onScrollEnd);
			if (autoScroll.current !== finish) return;
			autoScroll.current = null;
			requestAnimationFrame(syncUrlToScroll);
		};
		// Ignore scroll-end events from earlier scrolls; finish once the target is reached or after a timeout.
		const onScrollEnd = () => {
			if (Math.abs(window.scrollY - target) < 2) finish();
		};
		const timeout = window.setTimeout(finish, 1500);
		autoScroll.current = finish;
		window.addEventListener('scrollend', onScrollEnd);
		window.scrollTo({ top, behavior: 'smooth' });
	}, [location.key, location.pathname, location.state, syncUrlToScroll]);

	useEffect(() => {
		let frame = 0;
		const onScroll = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(syncUrlToScroll);
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		// Catch any scrolling that happened before the listener was attached.
		onScroll();
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('scroll', onScroll);
		};
	}, [syncUrlToScroll]);

	return null;
};

const Home = () => (
	<div>
		<SectionRouting />
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
				{Object.values(SECTION_PATHS).map((path) => (
					<Route key={path} path={path} element={<Home />} />
				))}
				<Route path="/project/:projectId" element={<ProjectDetail />} />
			</Routes>
		</Router>
	);
};

export default App;
