import { useLayoutEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import StatusBadge from './StatusBadge';
import ProjectGallery from './ProjectGallery';
import projectsData from '../data/projectsData';
import { SECTION_PATHS } from '../constants/sections';

const ProjectDetail = () => {
	const { projectId } = useParams<{ projectId: string }>();
	const project = projectId ? projectsData[projectId] : undefined;

	// The router keeps the previous page's scroll position; a project page always opens at the top.
	useLayoutEffect(() => {
		window.scrollTo({ top: 0 });
	}, [projectId]);

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
						<ProjectGallery project={project} />

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
								<Link to={SECTION_PATHS.project} state={{ projectId }} className="btn">
									Back to projects
								</Link>
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
