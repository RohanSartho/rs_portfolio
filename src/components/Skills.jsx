/**
 * Skills Section — light-only, no animations
 */

import { lightTheme } from '../theme/theme';

const theme = lightTheme;

const skillsList = [
    { name: "Product Strategy", icon: 'fas fa-chess', level: 92, color: 'from-orange-600 to-amber-500', description: 'Roadmaps, prioritization, OKRs' },
    { name: "User Research", icon: 'fas fa-users', level: 88, color: 'from-orange-500 to-yellow-500', description: 'Discovery, interviews, usability' },
    { name: "Data Analysis", icon: 'fas fa-chart-bar', level: 85, color: 'from-amber-600 to-orange-400', description: 'SQL, Mixpanel, Amplitude' },
    { name: "Agile / Scrum", icon: 'fas fa-tasks', level: 90, color: 'from-orange-700 to-orange-500', description: 'Sprint planning, retrospectives' },
    { name: "React / Next.js", icon: 'fab fa-react', level: 75, color: 'from-blue-400 to-cyan-400', description: 'Frontend development' },
    { name: "SQL", icon: 'fas fa-database', level: 80, color: 'from-indigo-500 to-blue-500', description: 'Analytics & data queries' },
    { name: "Git / GitHub", icon: 'fab fa-github', level: 85, color: 'from-gray-600 to-gray-900', description: 'Version control' },
    { name: "Go-to-Market", icon: 'fas fa-rocket', level: 88, color: 'from-orange-600 to-red-500', description: 'Launch strategy, positioning' },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className={`py-14 px-4 sm:px-6 overflow-x-hidden lg:min-h-screen lg:flex lg:items-center lg:justify-center ${theme.backgroundPrimary}`}
        >
            <div className="container mx-auto py-14">

                <div className="text-center mb-20">
                    <h1 className={`sm:text-4xl text-3xl font-bold mb-4 ${theme.textPrimary}`}>
                        My{' '}
                        <span className="bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h1>
                    <p className={theme.textSecondary}>
                        Product, data, and technical capabilities I bring to every team
                    </p>
                </div>

                <div className="flex flex-wrap -m-4">
                    {skillsList.map((skill, index) => (
                        <div key={index} className="p-4 lg:w-1/4 md:w-1/2 w-full">
                            <div className="bg-white border border-gray-200 h-full p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">

                                <div className="flex items-center mb-6">
                                    <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                                        <i className={`${skill.icon} text-3xl text-orange-600`} />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className={`text-xl font-bold ${theme.textPrimary}`}>{skill.name}</h3>
                                        <p className={`text-sm ${theme.textSecondary}`}>{skill.description}</p>
                                    </div>
                                </div>

                                <div className="mb-2 flex justify-between">
                                    <span className={theme.muted}>Proficiency</span>
                                    <span className="font-bold bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent">
                                        {skill.level}%
                                    </span>
                                </div>

                                <div className="w-full rounded-full h-3 overflow-hidden bg-gray-100 shadow-inner">
                                    <div
                                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
