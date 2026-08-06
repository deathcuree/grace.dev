import { Link } from 'react-router-dom';
import projectsData, { type Project } from '../data/projectsData';
import StatusBadge from './StatusBadge';

const ProjectMedia = ({
	project,
	className = '',
	fit = 'cover',
}: {
	project: Project;
	className?: string;
	fit?: 'cover' | 'contain';
}) => {
	if (!project.image) {
		return (
			<div
				className={
					'flex items-center justify-center bg-surface-2 text-center text-[0.8rem] text-ink-faint ' + className
				}
			>
				{project.category}
			</div>
		);
	}
	return (
		<div className={'overflow-hidden bg-surface-2 ' + className}>
			<img
				src={project.image}
				alt={`${project.title} screenshot`}
				loading="lazy"
				className={
					'h-full w-full transition-transform duration-500 group-hover:scale-105 ' +
					(fit === 'contain' ? 'object-contain' : 'object-cover')
				}
			/>
		</div>
	);
};

const Projects = () => {
	const entries = Object.entries(projectsData);
	const featuredEntry = entries.find(([, p]) => p.featured);
	const rest = entries.filter(([id]) => id !== featuredEntry?.[0]);

	return (
		<section id="project" className="section">
			<div className="wrap">
				<div className="mb-14 max-w-[620px]">
					<p className="eyebrow">Selected work</p>
					<h2 className="sec-title mb-3.5">Projects I've shipped.</h2>
					<p className="text-[1.02rem] text-ink-soft">
						Nine products across marketplaces, SaaS dashboards, and WordPress platforms — built solo and
						alongside engineering teams.
					</p>
				</div>

				{featuredEntry && (
					<FeaturedProject id={featuredEntry[0]} project={featuredEntry[1]} />
				)}

				<div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
					{rest.map(([id, project]) => (
						<Link key={id} to={`/project/${id}`} className="group block">
							<ProjectMedia project={project} className="mb-5 aspect-[4/3] rounded-[10px] shadow-[0_0_0_1px_rgb(var(--color-line))] transition-shadow group-hover:shadow-[0_12px_28px_-12px_rgba(20,20,20,0.18),0_0_0_1px_rgb(var(--color-line))]" />
							<div className="mb-3 flex items-center gap-3.5">
								<StatusBadge status={project.status} />
								<span className="text-[0.82rem] text-ink-faint">{project.category}</span>
							</div>
							<h3 className="mb-2 text-[1.12rem] font-semibold tracking-tight">{project.title}</h3>
							<p className="mb-3 max-w-[46ch] text-[0.92rem] leading-relaxed text-ink-soft">{project.description}</p>
							<div className="tag-row text-[0.8rem] text-ink-faint">
								{project.technologies.slice(0, 3).map((tech) => (
									<span key={tech}>{tech}</span>
								))}
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

const FeaturedProject = ({ id, project }: { id: string; project: Project }) => (
	<Link to={`/project/${id}`} className="group mb-20 grid items-center gap-11 lg:grid-cols-[1.1fr_0.9fr]">
		<ProjectMedia project={project} className="aspect-[16/11] rounded-xl" fit="contain" />
		<div>
			<div className="mb-[18px] flex items-center gap-3.5">
				<StatusBadge status={project.status} />
				<span className="text-[0.82rem] text-ink-faint">{project.category}</span>
			</div>
			<h3 className="mb-3 text-[1.6rem] font-semibold tracking-tight text-balance">{project.title}</h3>
			<p className="mb-5 max-w-[50ch] text-[1rem] leading-relaxed text-ink-soft">{project.description}</p>
			<div className="tag-row mb-6 text-[0.85rem] text-ink-faint">
				{project.technologies.slice(0, 5).map((tech) => (
					<span key={tech}>{tech}</span>
				))}
			</div>
			<span className="inline-flex items-center gap-1.5 text-[0.92rem] font-semibold transition-colors group-hover:text-accent">
				View case study
				<span className="transition-transform group-hover:translate-x-1">→</span>
			</span>
		</div>
	</Link>
);

export default Projects;
