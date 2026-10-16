import { useLocation, useNavigate } from 'react-router-dom';
import { SECTION_PATHS } from '../constants/sections';

const Footer = () => {
	const year = new Date().getFullYear();
	const location = useLocation();
	const navigate = useNavigate();
	const onHomePage = (Object.values(SECTION_PATHS) as string[]).includes(location.pathname);

	const backToTop = () => {
		if (onHomePage) {
			navigate(SECTION_PATHS.home);
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
