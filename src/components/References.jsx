/**
 * References Section — light-only, no animations
 * Add references to the array below when ready.
 */

import { lightTheme } from '../theme/theme';

const theme = lightTheme;

const references = [];

const References = () => {
    if (references.length === 0) return null;

    return (
        <section
            id="references"
            className={`py-16 px-4 sm:px-6 ${theme.backgroundPrimary}`}
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text">
                    References
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {references.map((ref, index) => (
                        <a
                            key={index}
                            href={ref.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{ref.title}</h3>
                            <p className="text-orange-600 text-sm mb-3">{ref.author}</p>
                            <p className="text-sm leading-relaxed mb-4 text-gray-600">{ref.description}</p>
                            <span className="text-orange-600 text-sm font-medium">View Document →</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default References;
