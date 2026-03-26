/**
 * Product Apps Section
 * Each card is fully clickable → opens live site in a new tab.
 * Hover lifts the entire card.
 */

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import findrecLogo from '../assets/findrec_logo.png';

/* ─── Inline SVG logos ───────────────────────────────────────────── */

const PrepEdgeLogo = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        {/* Purple rounded-square background */}
        <rect width="80" height="80" rx="20" fill="#7C3AED" />
        {/* White speech-bubble body */}
        <rect x="14" y="11" width="52" height="42" rx="9" fill="white" />
        {/* Bubble tail pointing down */}
        <path d="M30 53 L40 65 L50 53 Z" fill="white" />
        {/* Purple checkmark */}
        <path
            d="M26 33 L35.5 43 L54 24"
            stroke="#7C3AED"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

/* Wordle-style letter tiles with tricolore palette */
const WordleLogo = () => (
    <svg viewBox="0 0 160 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-14">
        {/* W */}
        <rect x="0"   y="4" width="28" height="28" rx="5" fill="#002395" />
        <text x="14"  y="23" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="sans-serif">W</text>
        {/* O */}
        <rect x="33"  y="4" width="28" height="28" rx="5" fill="#4B5563" />
        <text x="47"  y="23" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="sans-serif">O</text>
        {/* R */}
        <rect x="66"  y="4" width="28" height="28" rx="5" fill="#ED4245" />
        <text x="80"  y="23" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="sans-serif">R</text>
        {/* D */}
        <rect x="99"  y="4" width="28" height="28" rx="5" fill="#002395" />
        <text x="113" y="23" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="sans-serif">D</text>
        {/* L */}
        <rect x="132" y="4" width="28" height="28" rx="5" fill="#6aaa64" />
        <text x="146" y="23" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="sans-serif">L</text>
        {/* "en français" label */}
        <text x="80" y="50" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="sans-serif" fontStyle="italic">en français</text>
    </svg>
);

/* ─── Project data ───────────────────────────────────────────────── */

const projectsList = [
    {
        id: 1,
        title: 'FindRec Toronto',
        url: 'https://findrectoronto.vercel.app/',
        github: null,
        description:
            'Civic web app that cuts through the noise of the City of Toronto\'s recreation portal. Find activities, programs and parks near you — fast.',
        tags: ['Civic Tech', 'Next.js', 'TypeScript', 'PostGIS'],
        banner: (
            /* Full lockup: leaf icon + "FindRec" bold serif + "Toronto" italic serif */
            <div className="h-32 flex items-center justify-center bg-[#f0ece4] px-6 gap-3">
                <img src={findrecLogo} alt="" className="h-14 w-auto object-contain" />
                <div className="flex items-baseline leading-none" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                    <span className="text-[1.6rem] font-bold text-[#2d4a2f]">FindRec</span>
                    <span className="text-[1.6rem] italic font-normal text-[#2d4a2f]">Toronto</span>
                </div>
            </div>
        ),
    },
    {
        id: 2,
        title: 'French Wordle',
        url: null,
        github: 'https://github.com/RohanSartho',
        description:
            'Wordle-style daily puzzle game for learning French vocabulary. Streak tracking, instant tile feedback, and a growing word bank.',
        tags: ['Language Learning', 'React', 'Game Design'],
        banner: (
            <div className="h-32 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-red-50 px-6">
                <WordleLogo />
            </div>
        ),
    },
    {
        id: 3,
        title: 'PrepEdge',
        url: 'https://getprepedge.vercel.app/',
        github: null,
        description:
            'AI-powered interview prep platform for PMs. Role-specific questions, instant feedback, and structured practice to nail your next interview.',
        tags: ['AI', 'Interview Prep', 'Next.js', 'Product'],
        banner: (
            <div className="h-32 flex items-center justify-center bg-gradient-to-br from-violet-50 to-purple-100 px-6 gap-4">
                <PrepEdgeLogo />
                <span className="text-2xl font-bold text-gray-900 tracking-tight">PrepEdge</span>
            </div>
        ),
    },
];

/* ─── Component ─────────────────────────────────────────────────── */

const Projects = () => {
    return (
        <section id="projects" className="px-8 sm:px-12 py-12 bg-[#f5f1eb] border-t border-gray-200">

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Product Portfolio</h2>
                <a
                    href="https://github.com/RohanSartho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-700 transition-colors"
                >
                    <FaGithub />
                    View all on GitHub
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {projectsList.map((project) => {
                    const href = project.url || project.github;
                    return (
                        <a
                            key={project.id}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm
                                       hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200
                                       flex flex-col cursor-pointer"
                        >
                            {/* Banner / Logo area */}
                            {project.banner}

                            <div className="p-5 flex flex-col flex-1">
                                {/* Title + external-link icon */}
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3 className="text-base font-bold text-gray-900 leading-tight">{project.title}</h3>
                                    <FaExternalLinkAlt className="text-gray-300 group-hover:text-orange-500 transition-colors mt-0.5 shrink-0 text-xs" />
                                </div>

                                <p className="text-sm text-gray-600 mb-3 leading-relaxed flex-1">{project.description}</p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-orange-50 text-orange-700 px-2.5 py-0.5 text-xs rounded-full font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>

        </section>
    );
};

export default Projects;
