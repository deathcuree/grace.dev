import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Field, type FieldProps, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

interface ContactFormValues {
	to_name: string;
	from_name: string;
	message: string;
}

const validationSchema = Yup.object({
	to_name: Yup.string().min(2, 'Please enter your name.').required('Name is required'),
	from_name: Yup.string().email('Invalid email address').required('Email is required'),
	message: Yup.string().min(10, 'Your message must be at least 10 characters long.').required('Message is required'),
});

const inputClass =
	'w-full border-b border-line bg-transparent py-3 outline-none transition-colors placeholder:text-ink-faint focus:border-accent';

const Contact = () => {
	const [isMessageSent, setMessageSent] = useState(false);
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (_values: ContactFormValues, { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>) => {
		if (!form.current) return;
		const loadingId = toast.loading('Sending...');
		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setMessageSent(true);
					toast.success('Your message has been sent!', { id: loadingId });
					resetForm();
					setSubmitting(false);
				},
				() => {
					toast.error('Failed to send message. Please try again.', { id: loadingId });
					setSubmitting(false);
				}
			);
	};

	return (
		<section id="contact" className="section border-b-0">
			<div className="wrap grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
				<div>
					<p className="eyebrow">Get in touch</p>
					<h2 className="sec-title mb-5">Let's build something.</h2>
					<p className="mb-8 max-w-[44ch] text-[1.05rem] text-ink-soft">
						Have a project in mind, or need a full-stack engineer who can take it from architecture to
						deployment? I'd like to hear about it.
					</p>
					<div className="flex flex-col">
						<a
							className="flex items-center justify-between border-t border-line py-5 text-[1.1rem] font-medium transition-colors hover:text-accent"
							href="mailto:connect@shevirtualassistance.com"
						>
							Email <span>→</span>
						</a>
						<a
							className="flex items-center justify-between border-t border-line py-5 text-[1.1rem] font-medium transition-colors hover:text-accent"
							href="https://github.com/deathcuree"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub <span>→</span>
						</a>
						<a
							className="flex items-center justify-between border-y border-line py-5 text-[1.1rem] font-medium transition-colors hover:text-accent"
							href="https://www.linkedin.com/in/graceandaya/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn <span>→</span>
						</a>
					</div>
				</div>

				<Formik<ContactFormValues>
					initialValues={{ to_name: '', from_name: '', message: '' }}
					validationSchema={validationSchema}
					onSubmit={sendEmail}
				>
					{({ handleSubmit, isSubmitting }) => (
						<form ref={form} onSubmit={handleSubmit} className="rounded-2xl bg-surface-2 p-8">
							<div className="mb-5 flex flex-col gap-1.5">
								<Field name="to_name">
									{({ field, meta }: FieldProps<string>) => (
										<>
											<input {...field} className={inputClass} type="text" placeholder="Your name" />
											{meta.error && meta.touched && (
												<span className="text-sm text-red-500">{meta.error}</span>
											)}
										</>
									)}
								</Field>
							</div>
							<div className="mb-5 flex flex-col gap-1.5">
								<Field name="from_name">
									{({ field, meta }: FieldProps<string>) => (
										<>
											<input {...field} className={inputClass} type="email" placeholder="Your email" />
											{meta.error && meta.touched && (
												<span className="text-sm text-red-500">{meta.error}</span>
											)}
										</>
									)}
								</Field>
							</div>
							<div className="mb-7 flex flex-col gap-1.5">
								<Field name="message">
									{({ field, meta }: FieldProps<string>) => (
										<>
											<textarea
												{...field}
												rows={4}
												className={inputClass + ' resize-none'}
												placeholder="Your message"
											/>
											{meta.error && meta.touched && (
												<span className="text-sm text-red-500">{meta.error}</span>
											)}
										</>
									)}
								</Field>
							</div>
							<button
								type="submit"
								disabled={isSubmitting}
								aria-busy={isSubmitting}
								className="btn btn-solid w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
							>
								{isSubmitting ? 'Sending...' : 'Send message'}
							</button>
							{isMessageSent && (
								<p className="mt-4 text-sm font-medium text-accent">
									Your message has been sent. Looking forward to talking with you!
								</p>
							)}
						</form>
					)}
				</Formik>
			</div>
		</section>
	);
};

export default Contact;
