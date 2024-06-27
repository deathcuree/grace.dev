import React from "react";
// countup
import CountUp from "react-countup";
// intersection overser hook
import { InView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
// image
import Image from "../assets/me_laptop.jpeg";
// link
import { Link } from "react-scroll";

const About = () => {
  return (
    <section
      className="section"
      id="about"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-12 ">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] rounded-full"
          >
            <img
              src={Image}
              alt="solo"
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4">Former Junior Developer Intern at a Startup Company</h3>
            <p className="mb-4">
              During my internship, I gained substantial experience with Angular and TypeScript. I started on the frontend, where I utilized PrimeNG and conducted tests
              using Cypress and Lighthouse. I was later assigned to Full-Stack development, learning about RESTful APIs utilizing them with WebSockets and Event Bridge
              and tested them with Postman. Additionally, I became proficient in code testing with Jest and application testing using CI/CD pipelines in Jenkins. Lastly I
              seamlessly managed and created databases and backend systems.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-4 mt-4">
              <div className="text-[35px] font-tertiary text-gradient mb-2">
                {InView ? (
                  <CountUp
                    start={0}
                    end={4}
                    duration={3}
                  />
                ) : null}
                <div className="font-primary text-sm tracking-[2px]">BS in Information Technology</div>
              </div>
              <div className="flex gap-x-6">
                <div className="text-[35px] font-tertiary text-gradient mb-2">
                  {InView ? (
                    <CountUp
                      start={0}
                      end={3}
                      duration={3}
                    />
                  ) : null}
                  <div className="font-primary text-sm tracking-[2px]">Months of Internship</div>
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
