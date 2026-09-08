import nyFulcrumWebsite from "../assets/nyfulcrum-website.webp";
import starconcordWebsite from "../assets/starconcord-website.webp";
import sheVirtualAssistance from "../assets/she-virtual-assistance.webp";
import timeTracker from "../assets/time-tracker.webp";
import jobBoard from "../assets/job-board.webp";
import aiJobCreationTool from "../assets/ai-job-creation-tool.webp";
import importJobTool from "../assets/import-job-tool.webp";
import portfolio4 from "../assets/portfolio-img4.webp";
import portfolio5 from "../assets/portfolio-img5.webp";
import myKidReports from "../assets/my-kid-reports.webp";

export type ProjectStatus = "live" | "progress" | "archived" | "private";

export interface Project {
	title: string;
	category: string;
	status: ProjectStatus;
	image?: string;
	description: string;
	technologies: string[];
	features: string[];
	liveUrl?: string;
	featured?: boolean;
}

const projectsData: Record<string, Project> = {
	"kid-reports": {
		title: "Kid Reports",
		category: "School management platform",
		status: "live",
		featured: true,
		image: myKidReports,
		description:
			"A large-scale, multi-role school management ecosystem spanning a web app, marketing website, and mobile app — connecting admins, schools, parents, and students across dashboards, attendance, billing, admissions, and more. Our designer left partway through, so I worked hands-on with the client directly to carry the UI/UX through to shipping.",
		technologies: ["Next.js", "Nest.js", "MySQL", "AWS"],
		features: [
			"Role-based dashboards for admin, school, parent, and student accounts",
			"My School module for day-to-day school management",
			"Live activity feed of student updates",
			"Class schedules and school calendar (school tours, events)",
			"Student attendance tracking",
			"In-app communications and chat",
			"Stripe-powered billing and payments",
			"Admissions workflow management",
			"Learning module for coursework and progress",
			"Marketing and website content management",
			"Paperwork module with a Jotform-style fillable form builder",
			"Reporting across school and student activity",
			"Food program management",
			"Companion mobile app alongside the web platform",
		],
		liveUrl: "https://mykidreports.com/",
	},
	"she-time-tracker": {
		title: "SHE Time Tracker",
		category: "Internal SaaS tool",
		status: "live",
		featured: true,
		image: timeTracker,
		description: "Time tracking and PTO management with role-based dashboards, report generation, and admin controls — deployed serverless on AWS.",
		technologies: ["React", "TypeScript", "Tailwind", "Node.js", "Express", "MongoDB", "AWS Lambda"],
		features: [
			"Time tracking and project management",
			"Report generation",
			"PTO tracking and request management",
			"User authentication and role-based permissions",
			"Admin dashboard for user management",
		],
		liveUrl: "https://time-tracker-delta-ashen.vercel.app/",
	},
	"personal-portfolio": {
		title: "SHE Virtual Assistance",
		category: "Marketing site",
		status: "live",
		image: sheVirtualAssistance,
		description: "Animated marketing site for a virtual assistance startup, designed and built in Framer.",
		technologies: ["Framer", "Framer Motion"],
		features: ["Responsive design", "Smooth animations", "Services overview", "Contact form"],
		liveUrl: "https://shevirtualassistance.com/",
	},
	"island-eats": {
		title: "Island Eats",
		category: "Food delivery platform",
		status: "progress",
		image: portfolio5,
		description: "Connects local vendors with customers through live order tracking and vendor dashboards — in active development.",
		technologies: ["React", "TypeScript", "Ant Design", "Node.js", "Express", "MongoDB", "WebSocket"],
		features: ["Vendor and customer dashboards", "Real-time order status updates", "Food item listings with category filtering", "Mobile-first responsive design"],
		liveUrl: "https://development.charitycoders.org/",
	},
	jobflow24: {
		title: "JobFlow24",
		category: "Job board platform",
		status: "archived",
		image: jobBoard,
		description: "A WordPress job board with AI-assisted post creation, custom plugins, and advanced search for employers and job seekers.",
		technologies: ["WordPress", "Custom Plugins", "PHP", "Python", "JavaScript", "AI Integration", "SEO"],
		features: [
			"AI-powered job creation",
			"Custom WordPress plugins",
			"Advanced job search and filtering",
			"Employer and job seeker dashboards",
			"Automated job posting workflows",
		],
	},
	"ny-fulcrum": {
		title: "Fulcrum Solutions",
		category: "Company website",
		status: "live",
		image: nyFulcrumWebsite,
		description:
			"Translated Figma designs into a responsive Next.js site for my current employer, integrating existing AWS Lambda functions and CMS content workflows for dynamic content delivery.",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "AWS Lambda"],
		features: [
			"Responsive components built from Figma designs",
			"CMS-driven dynamic content delivery",
			"AWS Lambda integration for backend logic",
			"Performance-optimized page load across layouts",
		],
		liveUrl: "https://www.nyfulcrum.com/",
	},
	"create-job-ai": {
		title: "Create Jobs using AI",
		category: "WordPress AI tool",
		status: "private",
		image: aiJobCreationTool,
		description: "Generates and formats job postings with AI, publishing directly into WordPress to cut manual posting time.",
		technologies: ["Python", "FastAPI", "Custom WordPress Plugin", "AI Integration"],
		features: ["AI-powered job creation", "Automatic formatting and publishing to WordPress"],
	},
	"csv-importer": {
		title: "CSV Importer Tool",
		category: "WordPress plugin",
		status: "private",
		image: importJobTool,
		description: "Bulk-imports job listings from CSV files with custom field mapping into WordPress.",
		technologies: ["PHP", "Custom WordPress Plugin", "JavaScript"],
		features: ["Import jobs from CSV file", "Custom field mapping"],
	},
	starconcord: {
		title: "Starconcord",
		category: "Corporate website",
		status: "live",
		image: starconcordWebsite,
		description:
			"WordPress corporate site optimized for speed and search — improved page load by 30% through asset optimization and grew organic traffic by 20% via on-page SEO.",
		technologies: ["WordPress", "SEO", "Performance Optimization"],
		features: ["Asset and page-speed optimization", "On-page SEO improvements", "20% organic traffic growth"],
		liveUrl: "https://www.starconcord.com.sg/",
	},
	bidsnbuys: {
		title: "Bids N Buys",
		category: "E-commerce marketplace",
		status: "archived",
		image: portfolio4,
		description:
			"An auction-style marketplace where sellers list items and buyers bid or buy outright — real-time bid updates, AI-assisted listings, and a fully serverless AWS backend. I joined as an intern and grew into a junior developer role on this team.",
		technologies: [
			"Angular",
			"PrimeNG",
			"TypeScript",
			"Node.js",
			"Express",
			"AWS Lambda",
			"AWS API Gateway",
			"Redis",
			"DynamoDB",
			"MongoDB",
			"AWS S3",
			"WebSocket",
			"AI Integration",
			"PayMongo",
		],
		features: [
			"Auction-style bidding system",
			"AI-assisted product and service listings",
			"Real-time bid updates and notifications",
			"Advanced filtering and category search",
			"Responsive dashboards for buyers and sellers",
			"Serverless backend with scalable AWS architecture",
			"Secure payment integration via PayMongo",
			"Image and file uploads via AWS S3",
		],
		liveUrl: "https://www.f6s.com/company/bids-n-buys",
	},
};

export default projectsData;
