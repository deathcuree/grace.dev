import { STACK } from '../constants/stack';

const About = () => {
	return (
		<section id="about" className="section">
			<div className="wrap grid gap-[72px] lg:grid-cols-[1fr_1.1fr]">
				<div>
					<p className="eyebrow">About</p>
					<h2 className="sec-title mb-5">AI-driven, full-stack, client-facing.</h2>
					<p className="mb-5 max-w-[50ch] text-[1.05rem] leading-relaxed text-ink-soft">
						I build scalable web applications with <strong className="font-semibold text-ink">React, Next.js,
						Angular, and TypeScript</strong>, backed by <strong className="font-semibold text-ink">Node.js,
						Nest.js, Python/FastAPI</strong>, and legacy ASP.NET Web Forms where needed. I ship serverless on{' '}
						<strong className="font-semibold text-ink">AWS Lambda</strong>, manage infrastructure on EC2 and
						RDS, and wire up REST APIs and WebSockets for real-time features. I also maintain WordPress
						platforms and CI/CD pipelines with Jenkins, GitHub Actions, and Docker. I add{' '}
						<strong className="font-semibold text-ink">generative AI features</strong> to products with Python
						and FastAPI, and use AI-assisted development with Claude Code to ship faster.
					</p>
					<p className="max-w-[50ch] text-[1.05rem] leading-relaxed text-ink-soft">
						Currently a freelance AI engineer and full-stack developer, working with international clients
						end-to-end — from architecture to deployment.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
					{STACK.map((group) => (
						<div key={group.label}>
							<div className="mb-2.5 text-[0.82rem] font-medium text-ink-faint">{group.label}</div>
							<div className="tag-row text-[0.92rem] leading-[1.8] text-ink">
								{group.items.map((item) => (
									<span key={item}>{item}</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
