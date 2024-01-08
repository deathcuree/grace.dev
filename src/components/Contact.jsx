import React, { useState, useRef } from 'react';
// motion
import { motion } from 'framer-motion';
// icons
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
// variants
import { fadeIn } from '../variants';
// emailjs sender function
import emailjs from '@emailjs/browser';
// formik form handling
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const [isMessageSent, setMessageSent] = useState(false);
  const form = useRef();
  // validation schema using Yup
  const validationSchema = Yup.object({
    // Define validation rules for each field
    to_name: Yup.string().min(5, 'Invalid name.').required('Name is required'),
    from_name: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string()
      .min(10, 'Your message must be at least 10 characters long.')
      .required('Message is required'),
  });

  // submit function
  const sendEmail = (values, { setSubmitting }) => {
    // Send email logic using the values object
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
          setMessageSent(true); // Update state to indicate success
          setSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          setSubmitting(false);
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
          <Formik
            initialValues={{
              to_name: '',
              from_name: '',
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            {({ handleSubmit }) => (
              <motion.form
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-12  p-6 items-start"
                ref={form}
                onSubmit={handleSubmit}
              >
                <Field name="to_name">
                  {({ field, form, meta }) => (
                    <>
                      <input
                        {...field}
                        className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                        type="text"
                        placeholder="Your name"
                      />
                      {meta.error && meta.touched && (
                        <div className="text-sm text-red-800 dark:text-red-400">
                          {meta.error}
                        </div>
                      )}
                    </>
                  )}
                </Field>

                <Field name="from_name">
                  {({ field, form, meta }) => (
                    <>
                      <input
                        {...field}
                        className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                        type="email"
                        placeholder="Your email"
                      />
                      {meta.error && meta.touched && (
                        <div className="text-sm text-red-800 dark:text-red-400">
                          {meta.error}
                        </div>
                      )}
                    </>
                  )}
                </Field>

                <Field name="message">
                  {({ field, form, meta }) => (
                    <>
                      <input
                        {...field}
                        className="bg-transparent border-b pb-24 py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                        type="text"
                        placeholder="Your message"
                      />
                      {meta.error && meta.touched && (
                        <div className="text-sm text-red-800 dark:text-red-400">
                          {meta.error}
                        </div>
                      )}
                    </>
                  )}
                </Field>

                <button className="btn btn-lg" type="submit" value="sendEmail">
                  Send message
                </button>

                {isMessageSent && (
                  <p className="flex items-center text-sm font-medium text-accent">
                    Your message has been sent. Looking forward to talking with
                    you!
                  </p>
                )}
              </motion.form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Contact;
