import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import Img4 from "../assets/portfolio-img4.png";
import Img5 from "../assets/portfolio-img5.png";
import { Link } from "react-router-dom";

const projects = [
  {
    to: "/project/personal-portfolio",
    img: Img1,
    pretitle: "SHE Virtual Assistance",
    title: "Framer Website",
    subtitle: "Business Project",
  },
  {
    to: "/project/she-time-tracker",
    img: Img2,
    pretitle: "SHE Time Tracker",
    title: "Full Stack Application",
    subtitle: "Business Project",
  },
  {
    to: "/project/jobflow24",
    img: Img3,
    pretitle: "Job Board",
    title: "WordPress Website",
    subtitle: "Business Project",
  },
  {
    to: "/project/bidsnbuys",
    img: Img4,
    pretitle: "Bids N Buys",
    title: "E-commerce Website",
    subtitle: "Business Project",
  },
  {
    to: "/project/island-eats",
    img: Img5,
    pretitle: "Island Eats",
    title: "Delivery Website",
    subtitle: "Business Project",
  },
];

const ProjectCard = ({ to, img, pretitle, title, subtitle, delay }) => (
  <motion.div
    variants={fadeIn("up", delay)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.3 }}
    className="group relative overflow-hidden border-2 border-white/50 rounded-xl shadow-lg bg-black/30 hover:-translate-y-2 transition-transform duration-300"
  >
    {/* overlay */}
    <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
    {/* img */}
    <img
      className="group-hover:scale-110 transition-all duration-500 w-full h-64 object-cover"
      src={img}
      alt={pretitle}
    />
    {/* pretitle */}
    <div className="absolute -bottom-full left-8 group-hover:bottom-24 transition-all duration-500 z-50">
      <span className="text-gradient text-lg">{pretitle}</span>
    </div>
    {/* title */}
    <div className="absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-700 z-50">
      <span className="text-2xl md:text-3xl text-white font-bold">{title}</span>
      <p className="text-sm md:text-base">{subtitle}</p>
    </div>
    <Link to={to} className="absolute inset-0 z-50" />
  </motion.div>
);

const Project = () => {
  return (
    <section className="section" id="project">
      <div className="container mx-auto">
        {/* Intro text */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="h2 leading-tight text-accent">My projects.</h2>
          <p className="max-w-xl mb-8">
            I've assembled a varied range of projects, these include projects from personal, business, work
            projects driving creative applications of knowledge, and personal ventures exploring
            different technologies.
          </p>
        </motion.div>
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.to} {...project} delay={0.2 + idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
