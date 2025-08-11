import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";

const Contact = () => {
	const [isMessageSent, setMessageSent] = useState(false);
	const form = useRef();
	const validationSchema = Yup.object({
		to_name: Yup.string().min(5, "Invalid name.").required("Name is required"),
		from_name: Yup.string().email("Invalid email address").required("Email is required"),
		message: Yup.string()
			.min(10, "Your message must be at least 10 characters long.")
			.required("Message is required"),
	});

	const sendEmail = (values, { setSubmitting, resetForm }) => {
		const loadingId = toast.loading("Sending...");
		emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY).then(
			(result) => {
				setMessageSent(true);
				toast.success("Your message has been sent!", { id: loadingId });
				resetForm();
				setSubmitting(false);
			},
			(error) => {
				toast.error("Failed to send message. Please try again.", { id: loadingId });
				setSubmitting(false);
			},
		);
	};

	return (
		<section className="py-16 lg:section" id="contact">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* text */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex justify-start items-center">
						<div className="lg:text-left">
							<h2 className="text-[45px] lg:text-[90px] leading-none mb-4">Let's work together!</h2>
							<h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
								Get in touch
							</h4>
							<div className="flex text-[20px] gap-x-6 lg:mx-0 mb-4">
								<a href="https://github.com/deathcuree" aria-label="Github link">
									<FaGithub />
								</a>
								<a href="https://www.linkedin.com/in/graceandaya/" aria-label="Facebook link">
									<FaLinkedin />
								</a>
							</div>
						</div>
					</motion.div>
					{/* form */}
					<Formik
						initialValues={{
							to_name: "",
							from_name: "",
							message: "",
						}}
						validationSchema={validationSchema}
						onSubmit={sendEmail}>
						{({ handleSubmit, isSubmitting }) => (
							<motion.form
								variants={fadeIn("left", 0.3)}
								initial="hidden"
								whileInView={"show"}
								viewport={{ once: false, amount: 0.3 }}
								className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-12  p-6 items-start"
								ref={form}
								onSubmit={handleSubmit}>
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

								<button
									className="btn btn-lg disabled:opacity-60 disabled:cursor-not-allowed"
									type="submit"
									value="sendEmail"
									disabled={isSubmitting}
									aria-busy={isSubmitting}>
									{isSubmitting ? "Sending..." : "Send message"}
								</button>

								{isMessageSent && (
									<p className="flex items-center text-sm font-medium text-accent">
										Your message has been sent. Looking forward to talking with you!
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
