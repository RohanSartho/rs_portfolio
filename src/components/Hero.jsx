/**
 * Hero Section — compact intro, no profile photo (shown in sidebar)
 */

import { PrimaryButton } from './ui';

const Hero = ({ resumeData }) => {
    return (
        <section id="home" className="px-8 sm:px-12 pt-16 pb-12 bg-[#f5f1eb]">

            {/* Greeting */}
            <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Hey, I'm Rohan Sartho.
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                    Senior Product Manager specializing in B2B SaaS. I drive product strategy through
                    data-informed decisions, cross-functional collaboration, and a relentless focus on
                    customer outcomes.
                </p>

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
            </div>

            {/* Quick info rows — Zevi-style inline badges */}
            <div className="flex flex-col gap-4 max-w-xl">
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <span className="font-medium text-gray-800 w-40">Currently working at</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg shadow-sm border border-gray-200 text-xs font-semibold text-gray-700">
                        Various B2B SaaS
                    </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <span className="font-medium text-gray-800 w-40">Based in</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg shadow-sm border border-gray-200 text-xs font-semibold text-gray-700">
                        Toronto, Canada
                    </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <span className="font-medium text-gray-800 w-40">Open to</span>
                    <span className="px-3 py-1.5 bg-white rounded-lg shadow-sm border border-gray-200 text-xs font-semibold text-gray-700">
                        Full-time PM roles
                    </span>
                </div>
            </div>

        </section>
    );
};

export default Hero;
