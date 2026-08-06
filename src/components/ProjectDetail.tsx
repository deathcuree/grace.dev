import { useParams, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import StatusBadge from './StatusBadge';
import projectsData from '../data/projectsData';

const ProjectDetail = () => {
	const { projectId } = useParams<{ projectId: string }>();
	const project = projectId ? projectsData[projectId] : undefined;
	const navigate = useNavigate();

	if (!project) {
		return (
			<div>
				<Nav />
				<section className="wrap py-24 text-center">
					<p className="text-ink-soft">Project not found.</p>
				</section>
			</div>
		);
	}

	return (
		<div>
			<Nav />
			<section className="py-16 lg:py-24">
				<div className="wrap">
					<div className="mb-12">
						<p className="eyebrow mb-2">{project.category}</p>
						<h1 className="sec-title">{project.title}</h1>
					</div>

					<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
						<div className="aspect-[4/3] overflow-hidden rounded-xl bg-surface-2">
							{project.image ? (
								<img src={project.image} alt={project.title} className="h-full w-full object-contain" />
							) : (
								<div className="flex h-full w-full items-center justify-center text-sm text-ink-faint">
									{project.category}
								</div>
							)}
						</div>

						<div className="flex flex-col justify-between">
							<div>
								<div className="mb-8">
									<h3 className="mb-2 text-[0.82rem] font-medium text-ink-faint">Status</h3>
									<StatusBadge status={project.status} className="text-[0.95rem]" />
								</div>

								<div className="mb-8">
									<h3 className="mb-2 text-[0.82rem] font-medium text-ink-faint">Overview</h3>
									<p className="text-[1.02rem] leading-relaxed text-ink-soft">{project.description}</p>
								</div>

								<div className="mb-8">
									<h4 className="mb-3 text-[0.82rem] font-medium text-ink-faint">Technologies</h4>
									<div className="tag-row text-[0.9rem] text-ink-soft">
										{project.technologies.map((tech) => (
											<span key={tech}>{tech}</span>
										))}
									</div>
								</div>

								<div className="mb-8">
									<h4 className="mb-3 text-[0.82rem] font-medium text-ink-faint">Key features</h4>
									<ul className="space-y-2 text-[0.98rem] text-ink-soft">
										{project.features.map((feature) => (
											<li key={feature} className="flex gap-2.5">
												<span className="text-ink-faint">—</span>
												{feature}
											</li>
										))}
									</ul>
								</div>
							</div>

							<div className="flex flex-wrap gap-3.5">
								{project.liveUrl && (
									<a className="btn btn-solid" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
										{project.status === 'archived' ? 'Learn more' : 'View live site'}
									</a>
								)}
								<button
									type="button"
									className="btn"
									onClick={() => navigate('/', { state: { scrollTo: 'project' } })}
								>
									Back to projects
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default ProjectDetail;
