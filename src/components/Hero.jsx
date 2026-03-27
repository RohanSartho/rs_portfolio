/**
 * Hero Section
 * Layout:
 *   - H1 constrained to max-w-3xl
 *   - Bio (left, max-w-2xl) + stat chips pushed to right edge (full-width row)
 *   - CTAs below
 *   - Single info row: Based in | Open to (Full-time + Contract)
 */

import { PrimaryButton } from './ui';

const Hero = ({ resumeData }) => {
    return (
        <section id="home" className="px-8 sm:px-12 pt-16 pb-12 bg-[#f5f1eb]">

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl">
                Hey, I'm Rohan Sartho.
            </h1>

            {/* Bio + stat chips — full width so chips reach the right edge */}
            <div className="flex flex-col sm:flex-row gap-8 items-start mb-8 w-full">

                <p className="text-lg text-gray-600 leading-relaxed flex-1 text-justify" style={{ wordSpacing: 'normal', overflowWrap: 'break-word' }}>
                    Engineer-turned-PM with 12+ years shipping SaaS products across retail, healthcare,
                    financial services, and cloud security. I've led delivery of ML-powered anomaly
                    detection, geospatial routing systems, predictive analytics platforms, and mobile
                    SDKs that operate at scale: 10M+ MAU and operational savings across 250,000+
                    frontline workers. My engineering roots mean I prototype alongside engineers, write
                    API specs, and make trade-off calls rooted in system constraints, not just
                    stakeholder sentiment. I'm drawn to products where operational intelligence
                    compounds: courier dispatch, workforce scheduling, forecasting systems, and platforms
                    where the algorithm directly shapes someone's livelihood. I am a US Patent holder.
                </p>

                {/* Chips — ml-auto pushes them to the far right */}
                <div className="flex sm:flex-col gap-3 shrink-0 sm:ml-auto">

                    {/* 12+ Years */}
                    <div className="bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm flex items-center gap-3 min-w-[160px]">
                        <div className="text-2xl font-bold text-orange-600 leading-none">12+</div>
                        <div className="text-sm text-gray-500 leading-tight font-medium">Years in<br />Product</div>
                    </div>

                    {/* US Patent — clickable */}
                    <a
                        href="https://patents.justia.com/patent/20230396649"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm flex items-center gap-3 min-w-[160px]
                                   hover:border-orange-300 hover:shadow-md transition-all duration-200"
                    >
                        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 shrink-0">
                            <rect width="36" height="36" rx="10" fill="#fff7ed" />
                            <rect x="8" y="7" width="20" height="16" rx="3" fill="#ea580c" opacity="0.15" />
                            <rect x="8" y="7" width="20" height="16" rx="3" stroke="#ea580c" strokeWidth="1.5" fill="none" />
                            <line x1="12" y1="12" x2="24" y2="12" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="12" y1="15.5" x2="24" y2="15.5" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="12" y1="19" x2="19" y2="19" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="18" cy="29" r="4.5" fill="#ea580c" opacity="0.15" />
                            <circle cx="18" cy="29" r="4.5" stroke="#ea580c" strokeWidth="1.5" />
                            <line x1="15.5" y1="23" x2="14" y2="25" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="20.5" y1="23" x2="22" y2="25" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <div>
                            <div className="text-sm font-bold text-gray-900 leading-tight group-hover:text-orange-700 transition-colors">
                                US Patent
                            </div>
                            <div className="text-sm text-gray-400 leading-tight mt-0.5">Granted · View ↗</div>
                        </div>
                    </a>

                </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
                {resumeData && (
                    <a href={resumeData} download="Rohan_Sartho_Resume.pdf">
                        <PrimaryButton>
                            <i className="fas fa-download mr-2 text-sm" />
                            Download CV
                        </PrimaryButton>
                    </a>
                )}
                <a href="#contact">
                    <PrimaryButton>
                        <i className="fas fa-envelope mr-2 text-sm" />
                        Contact Me
                    </PrimaryButton>
                </a>
                <a href="mailto:rohansartho@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-orange-700 text-gray-800 hover:bg-orange-700 hover:text-white transition-colors duration-200">
                        Hire Me
                    </button>
                </a>
            </div>

            {/* Info row — Based in + Open to on same line */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">

                <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-800">Based in</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg shadow-sm border border-gray-200 text-xs font-semibold text-gray-700">
                        Toronto, Canada
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-800">Open to</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg shadow-sm border border-gray-200 text-xs font-semibold text-gray-700">
                        Full-time
                    </span>
                    <span className="px-3 py-1.5 bg-white rounded-lg shadow-sm border border-gray-200 text-xs font-semibold text-gray-700">
                        Contract
                    </span>
                </div>

            </div>

        </section>
    );
};

export default Hero;
