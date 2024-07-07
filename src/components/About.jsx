import React from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/me_laptop.jpeg";
import { Link } from "react-scroll";

const About = () => {
	return (
		<section className="section" id="about">
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
					{/* img */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
						<img src={Image} alt="solo" className="w-full h-full object-cover" />
					</motion.div>
					{/* text */}
					<motion.div
						variants={fadeIn("right", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1">
						<h2 className="h2 text-accent">About me.</h2>
						<h3 className="h3 mb-4">A former Junior Intern at a Startup Company</h3>
						<p className="mb-4">
							In my latest internship, I gained experience in Frontend and Backend. Specifically, I
							learned about creating components in Angular 17 using Typescript and spec testing for the
							codes. I was later assigned to align APIs and send emails using Mailgun templates.
							Additionally, I managed the MongoDB database, creating the schemas on each database. I am
							now learning about Websockets, and Event Bridge in AWS. I like learning and adapting to new
							technologies as I grow.
						</p>
						{/* stats */}
						<div className="flex gap-x-6 lg:gap-x-10 mb-4">
							<div className="text-[40px] font-tertiary text-gradient mb-2">
								{InView ? <CountUp start={0} end={4} duration={3} /> : null}
								<div className="font-primary text-sm tracking-[2px]">BS in Information Technology</div>
							</div>
							<div className="flex">
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{InView ? <CountUp start={0} end={3} duration={3} /> : null}
									<div className="font-primary text-sm tracking-[2px]">months of internship</div>
								</div>
							</div>
						</div>

						<div className="flex gap-x-8 items-center">
							<Link to="contact">
								<button className="btn btn-lg">Contact me</button>
							</Link>
							<Link to="project">
								<p className="text-gradient btn-link">My Portfolio</p>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
