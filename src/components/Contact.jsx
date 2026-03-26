/**
 * Contact Section — compact form layout
 */

import { PrimaryButton } from './ui';
import { useForm } from '@formspree/react';

const Contact = () => {
    const [formState, handleSubmit] = useForm("mreabryq");

    const onSubmit = async (event) => {
        event.preventDefault();
        await handleSubmit(event);
        if (formState.succeeded) event.target.reset();
    };

    return (
        <section id="contact" className="px-8 sm:px-12 py-12 bg-[#f5f1eb] border-t border-gray-200">

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h2>
            <p className="text-gray-600 text-sm mb-8">Let's talk about your project or opportunity.</p>

            {formState.succeeded && (
                <div className="mb-6 p-3 bg-green-100 text-green-800 rounded-lg text-sm">
                    Thanks! I'll get back to you soon.
                </div>
            )}
            {formState.errors && formState.errors.length > 0 && (
                <div className="mb-6 p-3 bg-red-100 text-red-800 rounded-lg text-sm">
                    Something went wrong. Please try again.
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                {/* Form */}
                <form onSubmit={onSubmit} method="POST" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text" name="firstName" placeholder="First Name" required
                            disabled={formState.submitting}
                            className="w-full px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                        />
                        <input
                            type="text" name="lastName" placeholder="Last Name" required
                            disabled={formState.submitting}
                            className="w-full px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                        />
                    </div>
                    <input
                        type="email" name="email" placeholder="Email Address" required
                        disabled={formState.submitting}
                        className="w-full px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    />
                    <textarea
                        name="message" rows="4" placeholder="Your message..." required
                        disabled={formState.submitting}
                        className="w-full px-4 py-2.5 rounded-lg text-sm bg-gray-50 border border-gray-200 text-gray-900 resize-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    />
                    <PrimaryButton type="submit" disabled={formState.submitting} fullWidth>
                        {formState.submitting ? 'Sending...' : 'Send Message'}
                    </PrimaryButton>
                </form>

                {/* Quick contact options */}
                <div className="flex flex-col gap-4">
                    {[
                        { icon: 'fas fa-envelope', label: 'Email', value: 'rohansartho@gmail.com', href: 'mailto:rohansartho@gmail.com' },
                        { icon: 'fas fa-phone',    label: 'Phone', value: '+1 (647) 685-2137',     href: 'tel:+16476852137' },
                        { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'rohan-sartho',       href: 'https://www.linkedin.com/in/rohan-sartho/' },
                    ].map(({ icon, label, value, href }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-4 hover:border-orange-300 hover:shadow-md transition-all group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-700 group-hover:bg-orange-700 group-hover:text-white transition-colors">
                                <i className={`${icon} text-base`} />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">{label}</div>
                                <div className="text-sm font-medium text-gray-800">{value}</div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Contact;
