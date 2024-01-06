import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import Img1 from '../assets/portfolio-img1.png';

const Project = () => {
  return (
    <section className="section" id="project">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">My projects.</h2>
              <p className="max-w-sm mb-16">
                I've assembled a varied range of projects, these include
                projects from bootcamps, school projects driving creative
                applications of knowledge, and personal ventures exploring
                different technologies.
              </p>
              <button className="btn btn-sm">View all projects.</button>
            </div>
            {/* image 1 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
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
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  HTML, CSS, Bootstrap
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image 2 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
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
                <span className="text-gradient">MERN Stack</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  Mern Stack Application
                </span>
                <p className="text-sm">In progress</p>
              </div>
            </div>
            {/* image 3 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="project3"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                <span className="text-gradient">Rental Management System</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  Jahnai Boarding Home
                </span>
                <p className="text-sm">In progress</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
