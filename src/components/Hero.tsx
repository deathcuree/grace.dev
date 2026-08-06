import { Link } from "react-scroll";
import soloPicture from "../assets/grace.webp";
import resumePdf from "../assets/Andaya_FullStackEngineer.pdf";

const stats = [
	{ n: "9", l: "Products shipped" },
	{ n: "2.5+", l: "Years experience" },
	{ n: "BSIT", l: "Information Technology" },
];

const Hero = () => {
	return (
		<section
			id="home"
			className="py-24 lg:py-28">
			<div className="wrap grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
				<div>
					<p className="eyebrow">Full Stack Engineer</p>
					<h1 className="mb-6 text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-tight lg:text-[4.6rem]">Grace Andaya</h1>
					<p className="mb-10 max-w-[46ch] text-[1.1rem] leading-relaxed text-ink-soft lg:text-[1.2rem]">
						I design and ship full-stack web applications — <strong className="font-semibold text-ink">serverless AWS backends</strong>, React and Next.js front ends,
						and WordPress platforms — for clients across time zones.
					</p>
					<div className="mb-14 flex flex-wrap gap-3.5">
						<Link
							to="project"
							smooth
							offset={-80}
							className="btn btn-solid cursor-pointer">
							View projects
						</Link>
						<a
							className="btn"
							href={resumePdf}
							download="Andaya_FullStackEngineer.pdf">
							Download résumé
						</a>
					</div>
					<div className="flex flex-wrap gap-12">
						{stats.map((stat) => (
							<div key={stat.l}>
								<div className="text-[1.7rem] font-semibold tracking-tight">{stat.n}</div>
								<div className="mt-1 text-[0.82rem] text-ink-faint">{stat.l}</div>
							</div>
						))}
					</div>
				</div>
				<div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-2">
					<img
						src={soloPicture}
						alt="Grace Andaya"
						className="h-full w-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
