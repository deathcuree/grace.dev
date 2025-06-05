import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import { Link } from "react-router-dom";
import Button from "./Button";

const Project = () => {
	return (
		<section className="section" id="project">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row gap-x-10">
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
						{/* text */}
						<div>
							<h2 className="h2 leading-tight text-accent">My projects.</h2>
							<p className="max-w-sm mb-16">
								I've assembled a varied range of projects, these include projects from personal, business, work
								projects driving creative applications of knowledge, and personal ventures exploring
								different technologies.
							</p>
							<Button variant="sm">View all projects</Button>
						</div>
						{/* image 1 */}
						<Link to="/project/personal-portfolio" className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							{/* overlay */}
							<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
							{/* img */}
							<img
								className="group-hover:scale-125 transition-all duration-500"
								src={Img1}
								alt="project1"
							/>
							{/* pretitle */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">Personal Portfolio</span>
							</div>
							{/* title */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50">
								<span className="text-3xl text-white">No Code</span>
								<p className="text-sm">Personal Project</p>
							</div>
						</Link>
					</motion.div>
					<motion.div
						variants={fadeIn("left", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex flex-col gap-y-10">
						{/* image 2 */}
						<Link to="/project/she-time-tracker" className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							{/* overlay */}
							<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
							{/* img */}
							<img
								className="group-hover:scale-125 transition-all duration-500"
								src={Img2}
								alt="project1"
							/>
							{/* pretitle */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">SHE Time Tracker</span>
							</div>
							{/* title */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50">
								<span className="text-3xl text-white">Full Stack Application</span>
								<p className="text-sm">Personal Project</p>
							</div>
						</Link>
						{/* image 3 */}
						<Link to="/project/rental-management" className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							{/* overlay */}
							<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
							{/* img */}
							<img
								className="group-hover:scale-125 transition-all duration-500"
								src={Img3}
								alt="project3"
							/>
							{/* pretitle */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
								<span className="text-gradient">Rental Management System</span>
							</div>
							{/* title */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50">
								<span className="text-3xl text-white">Jahnai Boarding Home</span>
								<p className="text-sm">HTML, Bootstrap, PHP, MySql</p>
								<p className="text-sm">Personal Project</p>
							</div>
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Project;
