import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { SECTION_PATHS } from '../constants/sections';

const navLinkClass = 'transition-colors hover:text-ink';

const Nav = () => (
	<header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
		<div className="wrap flex h-[76px] items-center justify-between">
			<Link to={SECTION_PATHS.home} className="text-[1rem] font-semibold tracking-tight">
				Grace Andaya
			</Link>
			<nav className="hidden items-center gap-10 text-[0.92rem] font-medium text-ink-soft md:flex">
				<Link to={SECTION_PATHS.project} className={navLinkClass}>
					Work
				</Link>
				<Link to={SECTION_PATHS.about} className={navLinkClass}>
					About
				</Link>
				<Link to={SECTION_PATHS.contact} className={navLinkClass}>
					Contact
				</Link>
			</nav>
			<div className="flex items-center gap-3.5">
				<ThemeToggle />
				<Link to={SECTION_PATHS.contact} className="btn btn-solid">
					Contact
				</Link>
			</div>
		</div>
	</header>
);

export default Nav;
