import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection overser hook
import { InView, useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              A fresh grad and a former Instructor from Gordon College diving
              into the depth of Web Developer.
            </h3>
            <p>
              Having an experience with HTML, CSS, Bootstrap, Tailwind,
              JavaScript, React, PHP, Laravel. I am enthusiastic in learning the
              progressive technology, especially in terms of programming
              languages. I am always eager to adapt in the fast changing
              technology.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div className="text-[40px] font-tertiary text-gradient mb-2">
                {InView ? <CountUp start={0} end={4} duration={3} /> : null}
                <div className="font-primary text-sm tracking-[2px]">
                  BS in Information Technology
                </div>
              </div>
              <div className="flex">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={1} duration={3} /> : null}
                  <div className="font-primary text-sm tracking-[2px]">
                    1 sem of teaching
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
