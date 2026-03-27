/**
 * Product Portfolio Section
 * Two subsections:
 *   1. Work Product Portfolio — professional PM work from VMware & Tata
 *   2. Personal AI-Powered Apps — independently built products
 */

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import findrecLogo from '../assets/findrec_logo.png';

/* ─── Inline SVG logos (personal apps) ──────────────────────────── */

const PrepEdgeLogo = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect width="80" height="80" rx="20" fill="#7C3AED" />
        <rect x="14" y="11" width="52" height="42" rx="9" fill="white" />
        <path d="M30 53 L40 65 L50 53 Z" fill="white" />
        <path d="M26 33 L35.5 43 L54 24" stroke="#7C3AED" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const WordleLogo = () => (
    <svg viewBox="0 0 160 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-14">
        <rect x="0"   y="4" width="28" height="28" rx="5" fill="#002395" />
        <text x="14"  y="23" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="sans-serif">W</text>
        <rect x="33"  y="4" width="28" height="28" rx="5" fill="#4B5563" />
        <text x="47"  y="23" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="sans-serif">O</text>
        <rect x="66"  y="4" width="28" height="28" rx="5" fill="#ED4245" />
        <text x="80"  y="23" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="sans-serif">R</text>
        <rect x="99"  y="4" width="28" height="28" rx="5" fill="#002395" />
        <text x="113" y="23" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="sans-serif">D</text>
        <rect x="132" y="4" width="28" height="28" rx="5" fill="#6aaa64" />
        <text x="146" y="23" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="sans-serif">L</text>
        <text x="80" y="50" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="sans-serif" fontStyle="italic">en français</text>
    </svg>
);

/* ─── Work product portfolio ─────────────────────────────────────── */

const workProducts = [
    {
        id: 'w1',
        company: 'VMware (Omnissa)',
        title: 'Digital Employee Experience Platform & Mobile SDK',
        description:
            'Built the security and telemetry SDK powering Workspace ONE on 10M+ MAU across iOS and Android, enabling enterprise IT teams to enforce Zero Trust policies, detect device compromise, and surface endpoint health signals across retail, healthcare, and financial services. Shipped a unified DEX dashboard that collapsed fragmented device signals into a single-pane IT view, cutting support escalations and improving endpoint visibility by 90%.',
        tags: ['Zero Trust', 'Mobile SDK', 'Telemetry', 'iOS & Android'],
        metrics: ['10M+ MAU', '$5M ARR', '90% visibility improvement'],
        color: '#0F4C81',
    },
    {
        id: 'w2',
        company: 'VMware (Omnissa)',
        title: 'Shift-Based Access & Identity',
        description:
            'Designed and shipped a Zero Trust identity product for frontline workers: automating shift-timed conditional access, role-based app provisioning, and credential lifecycle management across 250,000+ workforce at enterprise customers in retail, healthcare, and hospitality. Eliminated unauthorised access by 98% and generated $2M in new revenue by solving the "shared device, rotating workforce" identity problem that MDM alone could not crack.',
        tags: ['Zero Trust', 'Identity Management', 'Frontline Workers', 'Auth0 / OKTA'],
        metrics: ['250K+ workers', '$2M new revenue', '98% unauthorised access eliminated'],
        color: '#0F4C81',
    },
    {
        id: 'w3',
        company: 'VMware (Omnissa)',
        title: 'Workspace ONE UEM: Unified Endpoint Management',
        description:
            'Managing thousands of devices across locations, OS types, and ownership models is complexity most IT teams dread. As PM, I owned the platform layer that made it invisible: one console to enroll, secure, and monitor every endpoint, corporate or BYOD. The real challenge was trust. Every device connecting to a hospital network, retail POS, or banking app had to prove compliance before access was granted. Zero Trust at scale, enforced across 26,000+ enterprise customers globally.',
        tags: ['UEM', 'Zero Trust', 'BYOD', 'Enterprise Platform'],
        metrics: ['26,000+ enterprise customers', 'Corporate + BYOD', 'Cross-OS'],
        color: '#0F4C81',
    },
    {
        id: 'w4',
        company: 'Tata Communications',
        title: 'Cloud Security & Behavioural Threat Detection',
        description:
            'Owned the product roadmap for a cloud-native application protection platform serving banking, healthcare, and financial services. A missed threat here is not a metric problem; it is a breach headline. The core challenge was signal-to-noise: security teams drowning in alerts while real threats slipped through. Led delivery of a behavioural anomaly detection engine (UEBA) that learned baseline patterns per user, per workload, per environment, firing only when it mattered. Result: 92% detection accuracy, 75% fewer false positives, and remediation time cut in half.',
        tags: ['UEBA', 'Cloud Security', 'AI/ML', 'CNAPP'],
        metrics: ['92% detection accuracy', '75% fewer false positives', '50% faster remediation'],
        color: '#C1121F',
    },
];

/* ─── Personal AI-powered apps ───────────────────────────────────── */

const personalProjects = [
    {
        id: 'p1',
        title: 'FindRec Toronto',
        url: 'https://findrectoronto.vercel.app/',
        github: null,
        description:
            'Civic web app that cuts through the noise of the City of Toronto\'s recreation portal. Find activities, programs and parks near you, fast.',
        tags: ['Civic Tech', 'Next.js', 'TypeScript', 'PostGIS'],
        banner: (
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
        id: 'p2',
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
        id: 'p3',
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

/* ─── Patent card ────────────────────────────────────────────────── */

/* SVG thumbnail: shield + URL bar + risk score gauge */
const PatentThumbnail = () => (
    <svg viewBox="0 0 480 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Background */}
        <rect width="480" height="160" fill="#0f172a" />
        {/* Subtle grid */}
        {[...Array(8)].map((_, i) => (
            <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="160" stroke="#1e293b" strokeWidth="1" />
        ))}
        {[...Array(5)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={40 * i} x2="480" y2={40 * i} stroke="#1e293b" strokeWidth="1" />
        ))}

        {/* Left: Shield */}
        <path d="M60 30 L60 30 C60 30 40 38 40 55 L40 85 C40 100 60 112 60 112 C60 112 80 100 80 85 L80 55 C80 38 60 30 60 30Z"
            fill="#ea580c" opacity="0.2" />
        <path d="M60 30 L60 30 C60 30 40 38 40 55 L40 85 C40 100 60 112 60 112 C60 112 80 100 80 85 L80 55 C80 38 60 30 60 30Z"
            stroke="#ea580c" strokeWidth="2" fill="none" />
        <path d="M51 68 L57 74 L70 61" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Center: URL pattern box */}
        <rect x="110" y="35" width="240" height="28" rx="6" fill="#1e293b" />
        <text x="122" y="54" fill="#64748b" fontSize="11" fontFamily="monospace">https://</text>
        <text x="170" y="54" fill="#e2e8f0" fontSize="11" fontFamily="monospace">suspicious-domain.xyz/payload</text>

        {/* Pattern match highlight */}
        <rect x="110" y="75" width="240" height="20" rx="5" fill="#0f172a" />
        <rect x="110" y="75" width="78" height="20" rx="5" fill="#ea580c" opacity="0.18" />
        <text x="118" y="89" fill="#ea580c" fontSize="9" fontFamily="monospace" fontWeight="600">PATTERN MATCH</text>
        <text x="196" y="89" fill="#64748b" fontSize="9" fontFamily="monospace">· anomaly score computed</text>

        {/* Right: Risk gauge */}
        <text x="386" y="50" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif" fontWeight="600">RISK SCORE</text>
        {/* Gauge arc background */}
        <path d="M 346 105 A 40 40 0 0 1 426 105" stroke="#1e293b" strokeWidth="10" fill="none" strokeLinecap="round" />
        {/* Gauge arc fill — ~75% = high risk */}
        <path d="M 346 105 A 40 40 0 0 1 420 75" stroke="#ea580c" strokeWidth="10" fill="none" strokeLinecap="round" />
        <text x="386" y="108" textAnchor="middle" fill="#ea580c" fontSize="18" fontFamily="sans-serif" fontWeight="700">87</text>
        <text x="386" y="122" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">HIGH RISK</text>

        {/* Patent badge bottom-left */}
        <rect x="110" y="108" width="90" height="18" rx="4" fill="#ea580c" opacity="0.15" />
        <text x="155" y="121" textAnchor="middle" fill="#ea580c" fontSize="9" fontFamily="sans-serif" fontWeight="700">US12267360B2</text>
    </svg>
);

const PatentCard = () => (
    <a
        href="https://patents.justia.com/patent/20230396649"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col sm:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm
                   hover:shadow-xl hover:-translate-y-1 transition-all duration-200 max-w-3xl"
    >
        {/* Thumbnail */}
        <div className="sm:w-72 h-40 sm:h-auto shrink-0 overflow-hidden">
            <PatentThumbnail />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between flex-1">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-50 text-orange-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        US Patent Granted
                    </span>
                    <span className="text-xs text-gray-400 font-mono">US12267360B2</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 leading-snug mb-2 group-hover:text-orange-700 transition-colors">
                    URL Pattern-Based Risk Scoring & Anomaly Detection for Managed Browser Security
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    A system that dynamically analyzes URL patterns within enterprise managed browsers to compute
                    real-time risk scores and flag anomalous access behavior, enabling security teams to intercept
                    threats before data exfiltration occurs. Granted at VMware.
                </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full font-medium">Security</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full font-medium">AI/ML</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full font-medium">Browser</span>
                <span className="ml-auto text-xs text-gray-400 group-hover:text-orange-600 transition-colors flex items-center gap-1">
                    View on Justia <FaExternalLinkAlt className="text-[10px]" />
                </span>
            </div>
        </div>
    </a>
);

/* ─── Sub-components ─────────────────────────────────────────────── */

/* Work card — non-clickable showcase with metrics row */
const WorkCard = ({ product }) => (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
        {/* Colored header band */}
        <div
            className="h-2 w-full"
            style={{ backgroundColor: product.color }}
        />
        <div className="p-5 flex flex-col flex-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{product.company}</p>
            <h3 className="text-base font-bold text-gray-900 leading-tight mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-1">{product.description}</p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-1.5 mb-3">
                {product.metrics.map((m) => (
                    <span key={m} className="bg-gray-100 text-gray-700 px-2.5 py-0.5 text-xs rounded-full font-semibold">
                        {m}
                    </span>
                ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                    <span key={tag} className="bg-orange-50 text-orange-700 px-2.5 py-0.5 text-xs rounded-full font-medium">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

/* Personal app card — fully clickable */
const PersonalCard = ({ project }) => {
    const href = project.url || project.github;
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm
                       hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200
                       flex flex-col cursor-pointer"
        >
            {project.banner}
            <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-gray-900 leading-tight">{project.title}</h3>
                    <FaExternalLinkAlt className="text-gray-300 group-hover:text-orange-500 transition-colors mt-0.5 shrink-0 text-xs" />
                </div>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span key={tag} className="bg-orange-50 text-orange-700 px-2.5 py-0.5 text-xs rounded-full font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
};

/* ─── Section ────────────────────────────────────────────────────── */

const Projects = () => {
    return (
        <section id="projects" className="px-8 sm:px-12 py-12 bg-[#f5f1eb] border-t border-gray-200">

            {/* Section header */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900">Product Portfolio</h2>
            </div>

            {/* ── 1. Work Product Portfolio ── */}
            <div className="mb-12">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                    Work Product Portfolio
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {workProducts.map((p) => <WorkCard key={p.id} product={p} />)}
                </div>
            </div>

            {/* ── 2. Personal AI-Powered Apps ── */}
            <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                        Personal AI-Powered Apps
                    </h3>
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
                    {personalProjects.map((p) => <PersonalCard key={p.id} project={p} />)}
                </div>
            </div>

            {/* ── 3. Patents ── */}
            <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                    Patents
                </h3>
                <PatentCard />
            </div>

        </section>
    );
};

export default Projects;
