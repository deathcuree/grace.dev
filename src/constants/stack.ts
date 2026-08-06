export interface StackGroup {
	label: string;
	items: string[];
}

export const STACK: StackGroup[] = [
	{
		label: 'Frontend',
		items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Styled Components', 'Ant Design', 'Bootstrap'],
	},
	{
		label: 'Backend',
		items: ['Node.js', 'Express.js', 'Python (FastAPI)', 'PHP', 'ASP.NET Web Forms'],
	},
	{
		label: 'Data & caching',
		items: ['MongoDB', 'MySQL', 'Redis'],
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
			'Amplify',
			'Serverless Framework',
			'Jenkins',
			'GitHub Actions',
			'Docker',
		],
	},
	{
		label: 'CMS & no-code',
		items: ['WordPress', 'Framer'],
	},
];
