/**
 * Contact Section — quick-contact links only, no form
 */

const Contact = () => {
    return (
        <section id="contact" className="px-8 sm:px-12 py-12 bg-[#f5f1eb] border-t border-gray-200">

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h2>
            <p className="text-gray-600 text-sm mb-8">Open to full-time PM roles and interesting conversations.</p>

            <div className="flex flex-col gap-4 max-w-md">
                {[
                    { icon: 'fas fa-envelope', label: 'Email',    value: 'rohansartho@gmail.com',            href: 'mailto:rohansartho@gmail.com' },
                    { icon: 'fas fa-phone',    label: 'Phone',    value: '+1 (647) 685-2137',                href: 'tel:+16476852137' },
                    { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/rohan-sartho',    href: 'https://www.linkedin.com/in/rohan-sartho/' },
                    { icon: 'fab fa-github',   label: 'GitHub',   value: 'github.com/RohanSartho',          href: 'https://github.com/RohanSartho' },
                ].map(({ icon, label, value, href }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-4 hover:border-orange-300 hover:shadow-md transition-all group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-700 group-hover:bg-orange-700 group-hover:text-white transition-colors shrink-0">
                            <i className={`${icon} text-base`} />
                        </div>
                        <div>
                            <div className="text-xs text-gray-400">{label}</div>
                            <div className="text-sm font-medium text-gray-800">{value}</div>
                        </div>
                    </a>
                ))}
            </div>

        </section>
    );
};

export default Contact;
