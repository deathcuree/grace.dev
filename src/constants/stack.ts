export interface StackGroup {
	label: string;
	items: string[];
}

export const STACK: StackGroup[] = [
	{
		label: 'AI & automation',
		items: ['Generative AI integration', 'FastAPI AI services', 'Prompt engineering', 'Claude Code', 'Agentic workflows'],
	},
	{
		label: 'Frontend',
		items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Styled Components', 'Ant Design', 'PrimeNG', 'Bootstrap'],
	},
	{
		label: 'Backend',
		items: ['Node.js', 'Nest.js', 'Express.js', 'Python (FastAPI)', 'Go', 'PHP', 'C#', 'ASP.NET Web Forms'],
	},
	{
		label: 'Data & caching',
		items: ['MongoDB', 'MySQL', 'PostgreSQL', 'DynamoDB', 'Redis'],
	},
	{
		label: 'Cloud & DevOps',
		items: [
			'AWS Lambda',
			'API Gateway',
			'EC2',
			'RDS',
			'S3',
			'SES',
			'CloudWatch',
			'X-Ray',
			'Amplify',
			'Serverless Framework',
			'Jenkins',
			'GitHub Actions',
			'Docker',
		],
	},
	{
		label: 'Payments',
		items: ['Stripe', 'PayPal', 'Apple Pay', 'PayMongo'],
	},
	{
		label: 'CMS & no-code',
		items: ['WordPress', 'Framer'],
	},
];
