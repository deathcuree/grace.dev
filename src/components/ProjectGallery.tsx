import { useCallback, useEffect, useRef, useState } from 'react';
import type { Project, Screenshot } from '../data/projectsData';

// A project's gallery when it has one; otherwise just its cover image.
const screenshotsOf = (project: Project): Screenshot[] => {
	if (project.gallery?.length) return project.gallery;
	return project.image ? [{ image: project.image, caption: project.title }] : [];
};

const Lightbox = ({
	shots,
	index,
	onIndex,
	onClose,
}: {
	shots: Screenshot[];
	index: number;
	onIndex: (index: number) => void;
	onClose: () => void;
}) => {
	const closeButton = useRef<HTMLButtonElement>(null);
	const count = shots.length;
	const go = useCallback((step: number) => onIndex((index + step + count) % count), [index, count, onIndex]);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
			else if (e.key === 'ArrowRight' && count > 1) go(1);
			else if (e.key === 'ArrowLeft' && count > 1) go(-1);
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [go, onClose, count]);

	// Lock the page behind the modal and hand focus back to the page when it closes.
	useEffect(() => {
		const opener = document.activeElement as HTMLElement | null;
		const overflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		closeButton.current?.focus();
		return () => {
			document.body.style.overflow = overflow;
			opener?.focus();
		};
	}, []);

	const shot = shots[index];

	return (
		<div
			role="dialog"
			aria-modal="true"
			aria-label="Screenshots"
			className="fixed inset-0 z-50 flex flex-col bg-black/85 p-4 backdrop-blur-sm sm:p-8"
			onClick={onClose}
		>
			<div className="mb-3 flex items-center justify-between text-[0.85rem] text-white/70">
				<span>
					{index + 1} / {count}
				</span>
				<button
					ref={closeButton}
					type="button"
					onClick={onClose}
					className="rounded-md px-3 py-1.5 text-white transition-colors hover:bg-white/10"
				>
					Close
				</button>
			</div>

			<div className="relative flex min-h-0 flex-1 items-center justify-center">
				<img
					src={shot.image}
					alt={shot.caption}
					className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
					onClick={(e) => e.stopPropagation()}
				/>
				{count > 1 && (
					<>
						<button
							type="button"
							aria-label="Previous screenshot"
							onClick={(e) => {
								e.stopPropagation();
								go(-1);
							}}
							className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3.5 py-2 text-xl text-white transition-colors hover:bg-black/80"
						>
							‹
						</button>
						<button
							type="button"
							aria-label="Next screenshot"
							onClick={(e) => {
								e.stopPropagation();
								go(1);
							}}
							className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3.5 py-2 text-xl text-white transition-colors hover:bg-black/80"
						>
							›
						</button>
					</>
				)}
			</div>

			<p className="mx-auto mt-4 max-w-[70ch] text-center text-[0.95rem] leading-relaxed text-white/85">
				{shot.caption}
			</p>
		</div>
	);
};

const ProjectGallery = ({ project }: { project: Project }) => {
	const shots = screenshotsOf(project);
	const [open, setOpen] = useState<number | null>(null);
	const close = useCallback(() => setOpen(null), []);

	if (!project.image) {
		return (
			<div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-surface-2 text-sm text-ink-faint">
				{project.category}
			</div>
		);
	}

	return (
		<div>
			<button
				type="button"
				onClick={() => setOpen(0)}
				aria-label={`View ${project.title} screenshots`}
				className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-xl bg-surface-2"
			>
				<img src={project.image} alt={project.title} className="h-full w-full object-contain" />
				{shots.length > 1 && (
					<span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-[0.8rem] font-medium text-white">
						{shots.length} screenshots
					</span>
				)}
			</button>

			{shots.length > 1 && (
				<div className="mt-3 grid grid-cols-4 gap-3">
					{shots.map((shot, i) => (
						<button
							key={shot.image}
							type="button"
							onClick={() => setOpen(i)}
							aria-label={`Open screenshot ${i + 1}`}
							className="aspect-[4/3] cursor-zoom-in overflow-hidden rounded-lg bg-surface-2 shadow-[0_0_0_1px_rgb(var(--color-line))] transition-shadow hover:shadow-[0_0_0_2px_rgb(var(--color-accent))]"
						>
							<img src={shot.image} alt="" loading="lazy" className="h-full w-full object-cover object-left-top" />
						</button>
					))}
				</div>
			)}

			{open !== null && <Lightbox shots={shots} index={open} onIndex={setOpen} onClose={close} />}
		</div>
	);
};

export default ProjectGallery;
