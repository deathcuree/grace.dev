import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project6 from '../assets/project-6.png';
import project7 from '../assets/project-7.png';
import portfolio4 from '../assets/portfolio-img4.png';
import portfolio5 from '../assets/portfolio-img5.png';

const projectsData = {
  'personal-portfolio': {
    title: 'SHE Virtual Assistance Website',
    category: 'Built in Framer.website',
    image: project1,
    description: 'A startup company website built with Framer.website',
    technologies: ['Framer.website', 'Framer Motion'],
    features: [
      'Responsive design',
      'Smooth animations',
      'Services offered',
      'Contact form'
    ],
    liveUrl: 'https://shevirtualassistance.framer.website/',
  },
  'she-time-tracker': {
    title: 'SHE Time Tracker',
    category: 'Full Stack Application',
    image: project2,
    description: 'A comprehensive time tracking solution for managing work hours and paid time off tracking.',
    technologies: ['React', 'Tailwind', 'Node.js', 'MongoDB', 'Express', 'AWS Serverless', 'AWS Lambda'],
    features: [
      'Responsive design',
      'Time tracking management',
      'Project management',
      'Report generation',
      'PTO tracking',
      'PTO request management',
      'User authentication',
      'User roles and permissions',
      'Admin dashboard for user management',
    ],
    liveUrl: 'https://time-tracker-delta-ashen.vercel.app/',
  },
  'jobflow24': {
    title: 'JobFlow24.com',
    category: 'WordPress Website',
    image: project3,
    description: 'A modern job board platform built with WordPress, featuring custom plugins, AI-powered job creation, and advanced search/filtering for job seekers and employers.',
    technologies: ['WordPress', 'Custom Plugins', 'AI Integration', 'PHP', 'JavaScript', 'Python', 'CSS', 'SEO'],
    features: [
      'AI-powered job creation',
      'Custom WordPress plugins',
      'Advanced job search and filtering',
      'Responsive design',
      'Employer and job seeker dashboards',
      'Automated job posting workflows'
    ],
    liveUrl: 'https://www.jobflow24.com/',
  },
  'bidsnbuys': {
    title: 'bidsnbuys.com',
    category: 'E-commerce Website',
    image: portfolio4,
    description: 'bidsnbuys.com is an auction-style e‑commerce marketplace built with a frontend in Angular and a backend powered by AWS Serverless (Lambda, API Gateway, DynamoDB). Sellers list items and services, while buyers place bids or purchase outright. The platform features AI‑assisted listings, real‑time bidding updates via WebSocket, sophisticated filtering and search tools, responsive dashboards for users, and serverless automation workflows for listing management and payment handling. I contributed to this project from internship up unto a junior developer, assisting in building UI components and integrating core features during its early development phase.',
    technologies: ['Angular', 'PrimeNG', 'TypeScript', 'Node.js', 'Express', 'AWS Serverless', 'AWS Lambda', 'AWS API Gateway', 'MongoDB', 'AI Integration', 'AWS S3', 'AWS CloudWatch', 'AWS Step Functions / EventBridge', 'WebSocket', 'AI Integration', 'PayMongo Integration', 'Responsive Design', 'Jira'],
    features: [
      'Auction-style bidding system',
      'AI-assisted product and service listings',
      'Real-time bid updates and notifications',
      'Advanced filtering and category search',
      'Responsive dashboards for buyers and sellers',
      'Serverless backend with scalable AWS architecture',
      'Secure payment integration via PayMongo',
      'Image and file uploads via AWS S3',
      'Automated workflows for listing and bidding',
      'Mobile-friendly and responsive design'
    ],
    liveUrl: 'https://bidsnbuys.com/',
  },
  'island-eats': {
    title: 'Island Eats',
    category: 'Food Delivery Platform',
    image: portfolio5,
    description: 'Island Eats is a food delivery platform currently under development, built with React, TypeScript, and a Node.js/Express backend. The platform aims to connect local food vendors with customers through real-time order tracking and vendor dashboards. I contributed to the project during its early development phase through a third-party arrangement, assisting with backend logic, API integration, and UI tasks. We used Jira for collaboration',
    technologies: ['React', 'TypeScript', 'Ant Design', 'Node.js', 'Express', 'MongoDB', 'WebSocket', 'Responsive Design', 'Jira'],
    features: [
      'Vendor and customer dashboards',
      'Real-time order status updates',
      'Food item listings with category filtering',
      'Secure checkout and payment integration',
      'Mobile-first responsive design',
      'Scalable AWS serverless architecture',
      'Ongoing feature development and deployment'
    ],
    liveUrl: 'https://development.charitycoders.org/',
  },
  'create-job-ai': {
    title: 'Create Jobs using AI',
    category: 'AI Job Creation Tool',
    image: project6,
    description: 'A custom AI-powered job creation tool that integrates with WordPress to automatically generate and format job postings based on predefined templates. Built using PHP, JavaScript, and CSS, the system leverages AI to produce high-demand, high-salary job descriptions and seamlessly publish them to a WordPress site. Designed for efficiency, it reduces manual posting time, ensures consistent formatting, and adapts content to current market trends. Live demo and code requests are confidential.',
    technologies: ['Python', 'FastAPI', 'Custom WordPress Plugin', 'AI Integration', 'PHP', 'JavaScript', 'CSS'],
    features: [
      'AI-powered job creation',
    ],
    liveUrl: '',
  },
  'csv-importer': {
    title: 'CSV Importer Tool',
    category: 'Spreadsheet Import Tool',
    image: project7,
    description: 'A custom-built WordPress plugin that streamlines job posting management by importing listings directly from CSV files. Developed with PHP, JavaScript, and CSS, the tool parses spreadsheet data, maps fields to WordPress post structures, and publishes the jobs in bulk with minimal manual input. Designed for confidential datasets, it ensures secure handling of information and supports customizable field mapping to adapt to various CSV formats.',
    technologies: ['Custom WordPress Plugin', 'PHP', 'JavaScript', 'CSS'],
    features: [
      'Import jobs from CSV file',
    ],
    liveUrl: '',
  },
  // 'rental-management': {
  //   title: 'Rental Management System',
  //   category: 'Jahnai Boarding Home',
  //   image: require('../assets/portfolio-img3.png'),
  //   description: 'A complete rental property management system for handling tenants, payments, and maintenance requests.',
  //   technologies: ['HTML', 'Bootstrap', 'PHP', 'MySQL'],
  //   features: [
  //     'Property listing',
  //     'Tenant management',
  //     'Payment tracking',
  //     'Maintenance requests'
  //   ],
  //   liveUrl: 'https://jahnai-boarding.com',
  //   githubUrl: 'https://github.com/yourusername/rental-management'
  // }
};

export default projectsData;