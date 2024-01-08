import React, { useState, useRef } from 'react';
// motion
import { motion } from 'framer-motion';
// icons
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
// variants
import { fadeIn } from '../variants';
// emailjs sender function
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  // initialize state for errors
  const [errors, setErrors] = useState({
    to_name: '',
    from_name: '',
    message: '',
  });

  // validation functions
  const validateInput = (name, value) => {
    switch (name) {
      case 'to_name':
        setErrors((prevErrors) => ({
          ...prevErrors,
          to_name:
            value.length < 5 ? 'Your name must be 5 characters long!' : '',
        }));
        break;
      case 'from_name':
        setErrors((prevErrors) => ({
          ...prevErrors,
          from_name: validEmailRegex.test(value) ? '' : 'Email is not valid!',
        }));
        break;
      case 'message':
        setErrors((prevErrors) => ({
          ...prevErrors,
          message:
            value.length < 10
              ? 'Your message must be at least 10 characters long!'
              : '',
        }));
        break;
      default:
        break;
    }
  };

  // handle change event
  const handleChange = (event) => {
    const { name, value } = event.target;
    validateInput(name, value);
  };

  // handles submit button
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_i32c2x9',
        'template_mp7e5kw',
        form.current,
        '0vtYT_Ua2JEL8XA8r'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div className="lg:text-left">
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-4">
                Let's work together!
              </h2>
              <div className="flex text-[20px] gap-x-6 lg:mx-0 mb-4">
                <a href="https://github.com/deathcuree">
                  <FaGithub />
                </a>
                <a href="https://www.facebook.com/deathcureee/">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/deathcureeee/">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            ref={form}
            onChange={handleChange}
            onSubmit={sendEmail}
          >
            {errors.from_name && (
              <p className="error-message">{errors.from_name}</p>
            )}
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              name="to_name"
              type="text"
              placeholder="Your name"
              onChange={handleChange}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              name="from_name"
              type="email"
              placeholder="Your email"
              onChange={handleChange}
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              name="message"
              placeholder="Your message"
              onChange={handleChange}
            ></textarea>
            <button className="btn btn-lg" type="submit" value="sendEmail">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
