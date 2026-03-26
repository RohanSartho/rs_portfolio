/**
 * About Section — compact, no full-screen height
 */

const About = () => {
    return (
        <section id="about" className="px-8 sm:px-12 py-12 bg-[#f5f1eb] border-t border-gray-200">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                {/* Bio */}
                <div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        I'm a Senior Product Manager with deep experience in B2B SaaS. I specialize in translating
                        complex customer problems into clear product roadmaps, aligning engineering, design, and
                        go-to-market teams around measurable outcomes.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        I work at the intersection of strategy and execution — running discovery, shaping
                        prioritization frameworks, and driving features from concept to launch. Passionate about
                        building products that genuinely move the needle for businesses and the people who use them.
                    </p>

                    <div className="mt-6">
                        <a
                            href="https://www.linkedin.com/in/rohan-sartho/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-orange-700 text-gray-800 hover:bg-orange-700 hover:text-white transition-colors duration-200 text-sm"
                        >
                            View LinkedIn
                        </a>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { value: '6+',       label: 'Years in Tech' },
                        { value: '8 mo',     label: 'Prof. Experience' },
                        { value: '15+',      label: 'Projects Done' },
                    ].map(({ value, label }) => (
                        <div key={label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-200">
                            <div className="text-2xl font-bold text-orange-600 mb-1">{value}</div>
                            <div className="text-xs text-gray-500 leading-tight">{label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
