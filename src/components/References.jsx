/**
 * References Section
 * Displays recommendation letters / reference documents as clickable cards.
 * Add your own references here when ready.
 */

import { lightTheme, darkTheme } from '../theme/theme'

const References = ({ darkMode }) => {

    const theme = darkMode ? darkTheme : lightTheme

    // Add your references here:
    // {
    //   title: "Academic Reference",
    //   author: "Dr. Jane Smith, Professor",
    //   description: "Short description of the reference.",
    //   file: import('../assets/your_reference.pdf')  // or an external URL
    // }
    const references = []

    if (references.length === 0) return null

    return (
        <section
            id="references"
            className={`py-16 px-4 sm:px-6 ${theme.backgroundPrimary}`}
        >
            <div className="max-w-6xl mx-auto">

                <h1
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12
                    text-transparent bg-gradient-to-r from-green-600 to-green-400 bg-clip-text"
                    data-aos="fade-up"
                >
                    References
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {references.map((ref, index) => (
                        <a
                            key={index}
                            href={ref.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay={200 + index * 150}
                            className={`p-6 rounded-xl transition-all duration-300 hover:scale-105
                            ${darkMode
                                ? 'bg-gray-900 hover:bg-gray-800'
                                : 'bg-white shadow-lg hover:shadow-xl'
                            }`}
                        >
                            <h3 className="text-xl font-semibold mb-2">{ref.title}</h3>
                            <p className="text-green-400 text-sm mb-3">{ref.author}</p>
                            <p className={`text-sm leading-relaxed mb-4
                                ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                {ref.description}
                            </p>
                            <span className="text-green-400 text-sm font-medium">
                                View Document →
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default References
