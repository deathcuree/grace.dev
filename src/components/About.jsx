import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/me_laptop.jpg";
import { Link } from "react-scroll";
import Button from "./Button";

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
						<h3 className="h3 mb-4">Full Stack Developer experienced in working with International clients</h3>
						<p className="mb-4">
						Experienced full stack developer with a strong background in building dynamic and scalable web applications. Proficient in modern front-end frameworks like React and Angular, and skilled in TypeScript and JavaScript for developing responsive and maintainable user interfaces. On the back end, I work with Node.js and Express.js, and use MongoDB for efficient, document-based data storage.
						I've also deployed and maintained applications using AWS cloud services, ensuring performance, scalability, and reliability. In addition to custom-coded projects, I've created responsive and engaging websites using no-code platforms like WordPress and Framer, enabling rapid delivery without compromising design or functionality. Combining technical versatility with a user-centric mindset, I build full-stack solutions that are both robust and intuitive.
						</p>
						{/* stats */}
						<div className="flex gap-x-6 lg:gap-x-10 mb-4">
							<div className="text-[40px] font-tertiary text-gradient mb-2">
								{InView ? <CountUp start={0} end={4} duration={3} /> : null}
								<div className="font-primary text-sm tracking-[2px]">BS in Information Technology</div>
							</div>
							<div className="flex">
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{InView ? <CountUp start={0} end={2} duration={3} /> : null}
									<div className="font-primary text-sm tracking-[2px]">years of experience</div>
								</div>
							</div>
						</div>

						<div className="flex gap-x-8 items-center">
							<Button to="contact">Contact me</Button>
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
