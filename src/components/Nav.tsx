import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const scrollOptions = { duration: 800, smooth: 'easeInOutQuart' as const, offset: -80 };

const useScrollToSection = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (sectionId: string) => {
		if (location.pathname === '/') {
			scroller.scrollTo(sectionId, scrollOptions);
		} else {
			navigate('/', { state: { scrollTo: sectionId } });
		}
	};
};

const Nav = () => {
	const scrollToSection = useScrollToSection();

	return (
		<header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
			<div className="wrap flex h-[76px] items-center justify-between">
				<button
					type="button"
					onClick={() => scrollToSection('home')}
					className="cursor-pointer text-[1rem] font-semibold tracking-tight"
				>
					Grace Andaya
				</button>
				<nav className="hidden items-center gap-10 text-[0.92rem] font-medium text-ink-soft md:flex">
					<button type="button" onClick={() => scrollToSection('project')} className="cursor-pointer transition-colors hover:text-ink">
						Work
					</button>
					<button type="button" onClick={() => scrollToSection('about')} className="cursor-pointer transition-colors hover:text-ink">
						About
					</button>
					<button type="button" onClick={() => scrollToSection('contact')} className="cursor-pointer transition-colors hover:text-ink">
						Contact
					</button>
				</nav>
				<div className="flex items-center gap-3.5">
					<ThemeToggle />
					<button type="button" onClick={() => scrollToSection('contact')} className="btn btn-solid cursor-pointer">
						Contact
					</button>
				</div>
			</div>
		</header>
	);
};

export default Nav;
