import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Footer = () => {
	const year = new Date().getFullYear();
	const location = useLocation();

	const backToTop = () => {
		if (location.pathname === '/') {
			scroller.scrollTo('home', { duration: 800, smooth: 'easeInOutQuart', offset: -80 });
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	return (
		<footer className="py-10">
			<div className="wrap flex flex-wrap items-center justify-between gap-2.5 text-[0.85rem] text-ink-faint">
				<span>Grace Andaya © {year}</span>
				<button type="button" onClick={backToTop} className="cursor-pointer transition-colors hover:text-accent">
					Back to top ↑
				</button>
			</div>
		</footer>
	);
};

export default Footer;
