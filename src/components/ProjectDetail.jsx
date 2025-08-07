import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Header from './Header';
import Button from './Button';
import projectsData from '../data/projectsData';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];
  const navigate = useNavigate();

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <section className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto">
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center mb-12"
          >
            <h1 className="h2 text-accent mb-2">{project.title}</h1>
            <span className="text-lg mb-8">{project.category}</span>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Project Image */}
            <div className="border-2 border-white/50 rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="h3 mb-4">Project Overview</h3>
                <p className="mb-8">{project.description}</p>

                <div className="mb-8">
                  <h4 className="text-xl text-accent mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl text-accent mb-4">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="sm"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Site
                </Button>
                {/* <Button
                  variant="sm"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source Code
                </Button> */}
                <Button
                  variant="sm"
                  onClick={() => navigate('/', { state: { scrollTo: 'project' } })}
                >
                  Back to Projects
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail; 