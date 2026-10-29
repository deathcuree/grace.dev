import nyFulcrumWebsite from "../assets/nyfulcrum-website.webp";
import starconcordWebsite from "../assets/starconcord-website.webp";
import sheVirtualAssistance from "../assets/she-virtual-assistance.webp";
import timeTracker from "../assets/time-tracker.webp";
import timeTrackerUserDashboardDark from "../assets/time-tracker-user-dashboard-dark.webp";
import timeTrackerUserDashboardLight from "../assets/time-tracker-user-dashboard-light.webp";
import timeTrackerTimeHistoryDark from "../assets/time-tracker-time-history-dark.webp";
import timeTrackerTimeHistoryLight from "../assets/time-tracker-time-history-light.webp";
import timeTrackerEditTimeEntryDark from "../assets/time-tracker-edit-time-entry-dark.webp";
import timeTrackerEditTimeEntryLight from "../assets/time-tracker-edit-time-entry-light.webp";
import timeTrackerAccountSettingsDark from "../assets/time-tracker-account-settings-dark.webp";
import timeTrackerAccountSettingsLight from "../assets/time-tracker-account-settings-light.webp";
import timeTrackerLogin from "../assets/time-tracker-login.webp";
import jobBoard from "../assets/job-board.webp";
import aiJobCreationTool from "../assets/ai-job-creation-tool.webp";
import importJobTool from "../assets/import-job-tool.webp";
import portfolio4 from "../assets/portfolio-img4.webp";
import portfolio5 from "../assets/portfolio-img5.webp";
import myKidReports from "../assets/my-kid-reports.webp";
import huntMyself from "../assets/hunt-myself.webp";
import leadFinder from "../assets/lead-finder.webp";
import leadFinderLead from "../assets/lead-finder-lead.webp";
import leadFinderApplied from "../assets/lead-finder-applied.webp";
import complianceTrainingFunnel from "../assets/compliance-training-funnel.webp";
import complianceBillingPortal from "../assets/compliance-billing-portal.webp";

export type ProjectStatus = "live" | "progress" | "archived" | "private";

export interface Screenshot {
	image: string;
	caption: string;
}

export interface Project {
	title: string;
	category: string;
	status: ProjectStatus;
	image?: string;
	/** Extra screenshots shown in the gallery on the project page. */
	gallery?: Screenshot[];
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
	"lead-finder": {
		title: "Lead Finder",
		category: "AI lead-finding web app",
		status: "live",
		image: leadFinder,
		gallery: [
			{
				image: leadFinderLead,
				caption: "A lead opened: the score with its written reason, hirer, hours and rate, the closest matching projects, and a drafted pitch ready to copy.",
			},
			{
				image: leadFinderApplied,
				caption: "Leads filtered by status to track applications, with a same-company check that flags other roles from a company already applied to.",
			},
		],
		description:
			"An invite-only web app that collects freelance leads, scores each one against the user's résumé with Gemini, drafts a tailored pitch for the strong ones, and tracks applications. It started as a local tool for myself and now runs hosted for several users. It drafts; you send.",
		technologies: [
			"TypeScript",
			"React",
			"NestJS",
			"PostgreSQL",
			"Drizzle",
			"Gemini API",
			"AWS Lambda",
			"Vercel",
			"Tailwind CSS",
			"shadcn/ui",
			"Chrome Extension",
		],
		features: [
			"Invite-only accounts with email, password, and an emailed sign-in code",
			"Browser Save button that sends the job page I have open, so the app never contacts job sites itself",
			"Each user's own profile, rules, and Gemini key, with the key stored encrypted",
			"Background scoring queue that ranks each lead against the user's résumé, with a written reason and the closest matching projects",
			"Rate conversion, rate floor, filtering, and ordering applied in code from each user's rules rather than left to the model",
			"Pitch drafted for strong leads, editable and never sent automatically",
			"Status tracking for applications, with a same-company check",
			"Admin page for inviting users",
			"NestJS API on AWS Lambda with Postgres, React site on Vercel, and separate development and production stages",
			"Built spec-first with agentic Claude Code workflows and covered by offline tests",
		],
		liveUrl: "https://lead-finder-phi-nine.vercel.app/",
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
	"create-job-ai": {
		title: "Create Jobs using AI",
		category: "WordPress AI tool",
		status: "private",
		image: aiJobCreationTool,
		description: "Generates and formats job postings with AI, publishing directly into WordPress to cut manual posting time.",
		technologies: ["Python", "FastAPI", "Custom WordPress Plugin", "AI Integration"],
		features: ["AI-powered job creation", "Automatic formatting and publishing to WordPress"],
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
	"hunt-myself": {
		title: "Hunt Myself",
		category: "Multi-source search tool",
		status: "archived",
		image: huntMyself,
		description:
			"A subscription-based search tool that queries Google, YouTube, and Reddit through their APIs and combines the results in one view, with live refresh and an admin panel for managing subscribers.",
		technologies: ["Python", "FastAPI", "REST APIs", "HTML"],
		features: [
			"Search across Google, YouTube, and Reddit from one search box",
			"Combined results table with titles, links, and dates",
			"Live refresh of search results",
			"User accounts with subscription status",
			"Admin panel for managing subscribers and admins",
			"Light and dark themes",
		],
	},
	"she-time-tracker": {
		title: "SHE Time Tracker",
		category: "Internal SaaS tool",
		status: "live",
		featured: true,
		image: timeTracker,
		gallery: [
			{
				image: timeTrackerUserDashboardDark,
				caption: "The dashboard: clock in and out for today, this week's hours by day, PTO left for the year, and recent entries.",
			},
			{
				image: timeTrackerUserDashboardLight,
				caption: "The same dashboard in the light theme.",
			},
			{
				image: timeTrackerTimeHistoryDark,
				caption: "Time history filtered by year, month, and status, with edits allowed on entries from the last 7 days.",
			},
			{
				image: timeTrackerTimeHistoryLight,
				caption: "Time history in the light theme.",
			},
			{
				image: timeTrackerEditTimeEntryDark,
				caption: "Editing an entry: clock-in and clock-out times, breaks, and shifts that end the next day, with the worked hours calculated live.",
			},
			{
				image: timeTrackerEditTimeEntryLight,
				caption: "The edit pop-up in the light theme.",
			},
			{
				image: timeTrackerAccountSettingsDark,
				caption: "Account settings for updating your name and changing your password.",
			},
			{
				image: timeTrackerAccountSettingsLight,
				caption: "Account settings in the light theme.",
			},
			{
				image: timeTrackerLogin,
				caption: "Sign-in page.",
			},
		],
		description:
			"Time tracking and PTO management for a virtual assistance team, with break-aware hours, role-based dashboards, Excel reports, and admin controls — deployed serverless on AWS.",
		technologies: ["React", "TypeScript", "Tailwind", "shadcn/ui", "Node.js", "Express", "MongoDB", "AWS Lambda"],
		features: [
			"Clock in and out, with pause and resume for breaks",
			"Break-aware hours, with breaks and next-day shifts editable on each entry",
			"Dashboard with today's timer, this week's hours by day, and recent entries",
			"Time history with year, month, and status filters",
			"PTO requests with approval, a monthly calendar, and hours left for the year",
			"Per-user schedule settings set by admins",
			"Admin time logs to view, edit, and add any user's entries, with Excel export",
			"Role-based permissions, including a read-only role for automated reporting",
			"Light and dark themes",
		],
		liveUrl: "https://time-tracker-delta-ashen.vercel.app/",
	},
	"island-eats": {
		title: "Island Eats",
		category: "Food delivery platform",
		status: "archived",
		image: portfolio5,
		description: "A food delivery platform connecting local vendors with customers through live order tracking and vendor dashboards.",
		technologies: ["React", "TypeScript", "Ant Design", "Node.js", "Express", "MongoDB", "WebSocket"],
		features: ["Vendor and customer dashboards", "Real-time order status updates", "Food item listings with category filtering", "Mobile-first responsive design"],
	},
	"ny-fulcrum": {
		title: "Fulcrum Solutions",
		category: "Company website",
		status: "live",
		image: nyFulcrumWebsite,
		description:
			"Translated Figma designs into a responsive Next.js site for Fulcrum Solutions, backed by Go APIs on AWS Lambda and a Strapi CMS we built for dynamic content delivery, which I later upgraded to the latest Strapi release.",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Go", "AWS Lambda", "Strapi"],
		features: [
			"Responsive components built from Figma designs",
			"Strapi CMS for dynamic content delivery, built in-house and upgraded to the latest release",
			"Backend APIs in Go on AWS Lambda",
			"Performance-optimized page load across layouts",
		],
		liveUrl: "https://www.nyfulcrum.com/",
	},
	"compliance-training-funnel": {
		title: "Compliance Training Funnel",
		category: "WordPress funnel & LMS",
		status: "live",
		image: complianceTrainingFunnel,
		description:
			"A WordPress registration funnel and training platform where healthcare practices sign up and their staff complete mandatory OSHA training and certification. I built features and fixed bugs across the whole journey, from the first registration step through to taking lessons.",
		technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "PayPal", "AWS EC2"],
		features: [
			"Practice registration funnel",
			"Separate employer and employee portals",
			"Authentication and routing fixes across the funnel",
			"Payment integration, including the apply-payment flow and PayPal",
			"Removed WordPress payment integrations as billing moved to the Stripe-based portal",
			"Lessons, quizzes, and certification flow",
			"Bug fixes across the full user journey",
			"SSH deployments to AWS EC2",
		],
		liveUrl: "https://funneldev.enviromerica.com/lms/member-registration/",
	},
	"compliance-billing-portal": {
		title: "Compliance Billing Portal",
		category: "Legacy ASP.NET app",
		status: "live",
		image: complianceBillingPortal,
		description:
			"A legacy ASP.NET Web Forms compliance portal for healthcare practices. I owned its deployments, which were manual releases to an RDS-backed legacy stack with no CI/CD, and helped set up its Stripe billing portal.",
		technologies: ["ASP.NET Web Forms", "C#", "Stripe", "AWS RDS"],
		features: ["Manual production deployments", "Stripe billing portal setup", "Maintenance of the legacy stack"],
		liveUrl: "https://portal.enviromerica.com/Login.aspx?ReturnUrl=%2f",
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
};

export default projectsData;
