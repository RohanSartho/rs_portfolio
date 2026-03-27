/**
 * "What I Do" Section
 * Layout:
 *   - Bio (left) + 10+ Years / US Patent stats (right) inline
 *   - 4 capability category cards below
 */

/* ─── Category card data ─────────────────────────────────────────── */

const categories = [
    {
        id: 'pm',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
        label: 'Product Management',
        summary: 'End-to-end roadmap ownership across discovery, delivery, and launch.',
        points: [
            '0-to-1 and growth-stage product delivery',
            'Cross-functional leadership: Eng, DS, Design',
            'JTBD prioritization, agile ceremonies, sprint planning',
            'Stakeholder alignment from IC to C-suite',
        ],
    },
    {
        id: 'dev',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        label: 'Platform & Developer Products',
        summary: 'Enterprise-grade SDK and platform delivery at scale.',
        points: [
            'Mobile Endpoint Management SDK: 10M+ MAU',
            'Shift-Based Access SDK (Auth0, OKTA, BioID, Ping)',
            '$5M ARR across 30+ releases over 4 years',
            'iOS & Android enterprise platform lifecycle',
        ],
    },
    {
        id: 'analytics',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        label: 'Analytics & Intelligence',
        summary: 'Data-intensive platforms and ML-powered decision systems.',
        points: [
            'PM of WS1 Intelligence (now Omnissa Intelligence): 5M+ daily data points',
            'ML anomaly detection: 92% accuracy, 75% false-positive reduction',
            'KPI definition and monitoring via SQL & Python',
            'Unified telemetry dashboards improving ops visibility by 90%',
        ],
    },
    {
        id: 'ai',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        label: 'AI-First Builder',
        summary: 'Adapting fast. Building real products with AI, not just managing them.',
        points: [
            'PrepEdge: AI interview coach for PMs (Next.js + Claude)',
            'FindRec Toronto: civic geospatial app (PostGIS, Supabase)',
            'Full-stack fluency: schema design, API specs, deployment',
            'Shipping independently to stay sharp on how AI products actually work',
        ],
    },
];

/* ─── Section ────────────────────────────────────────────────────── */

const About = () => {
    return (
        <section id="about" className="px-8 sm:px-12 py-12 bg-[#f5f1eb] border-t border-gray-200">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">What I Do</h2>

            {/* 2-col grid — always two per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col"
                    >
                        {/* Icon + label */}
                        <div className="flex items-center gap-3 mb-2 text-orange-600">
                            {cat.icon}
                            <h3 className="text-base font-bold text-gray-900 leading-tight">{cat.label}</h3>
                        </div>

                        {/* Summary */}
                        <p className="text-sm text-gray-500 leading-relaxed mb-4">{cat.summary}</p>

                        {/* Bullet points */}
                        <ul className="space-y-2 mt-auto">
                            {cat.points.map((pt) => (
                                <li key={pt} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                                    <span className="text-orange-400 mt-0.5 shrink-0">▸</span>
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default About;
