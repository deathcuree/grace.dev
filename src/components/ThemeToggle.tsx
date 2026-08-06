import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label="Toggle dark mode"
			className="inline-flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full border border-line text-ink transition-all hover:-translate-y-px hover:border-ink-faint focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
		>
			{theme === 'dark' ? (
				<svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
					<path d="M20.2 14.1A8.4 8.4 0 0 1 9.9 3.8a8.4 8.4 0 1 0 10.3 10.3Z" />
				</svg>
			) : (
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth={1.6}
					strokeLinecap="round"
					className="h-[17px] w-[17px]"
				>
					<circle cx="12" cy="12" r="4.2" />
					<path d="M12 2.5v2.6M12 18.9v2.6M4.6 4.6l1.85 1.85M17.55 17.55l1.85 1.85M2.5 12h2.6M18.9 12h2.6M4.6 19.4l1.85-1.85M17.55 6.45l1.85-1.85" />
				</svg>
			)}
		</button>
	);
};

export default ThemeToggle;
