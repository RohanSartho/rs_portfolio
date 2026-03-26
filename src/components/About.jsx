/**
 * About Section Component
 * Personal and professional information section with statistics and visual elements
 * Features a custom star-shaped decorative element and theme-aware animations
 */

// Import theme configurations
import { lightTheme, darkTheme } from '../theme/theme';

// Import UI components
import { PrimaryButton } from './ui'
import { SecondaryButton } from './ui'

// Import Framer Motion for animations
import { motion } from 'framer-motion'

/**
 * About Component
 * @param {Object} props - Component properties
 * @param {boolean} props.darkMode - Current theme state
 */
const About = ({ darkMode }) => {

    // Select theme based on darkMode prop
    const theme = darkMode ? darkTheme : lightTheme;

    // Theme-aware glow colors for button animations
    const glowColor = darkMode 
        ? "0 0 30px rgba(34, 197, 94, 0.7), 0 0 60px rgba(34, 197, 94, 0.4)"  // Green glow for dark mode
        : "0 0 30px rgba(13, 24, 46, 0.6), 0 0 60px rgba(59, 130, 246, 0.5)";  // Blue glow for light mode

    // Framer Motion animation variants for buttons
    const buttonVariants = {
        rest: {
            scale: 1,
            boxShadow: "0 0 0px rgba(0, 0, 0, 0)"  // No shadow at rest
        },
        hover: {
            scale: 1.05,                            // Slight scale up
            boxShadow: glowColor                    // Apply theme-aware glow
        },
        tap: {
            scale: 0.95                             // Slight scale down on tap
        }
    };

    return (
    // Main section with theme-aware background gradient
    <section
        id="about"
        className={`py-16 px-4 sm:px-6 overflow-x-hidden lg:min-h-screen lg:flex lg:items-center lg:justify-center ${theme.backgroundPrimary}`}
    >
        {/* Responsive grid layout */}
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            
            {/* Left column - Visual element with star shape */}
            <figure 
                data-aos='fade-up'                  // Animation type
                data-aos-delay='300'                // Animation delay
                className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1" // Mobile order
            >
                <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                    {/* Decorative star-shaped gradient background */}
                    <div 
                        className={`absolute -inset-4 lg:-inset-20 bg-gradient-to-br
                        ${darkMode 
                            ? 'from-green-600 via-green-500 to-green-400' 
                            : 'from-blue-500 via-blue-400 to-cyan-400'} 
                        rotate-12 star-shape z-10`}
                        data-aos='zoom-in' 
                        data-aos-delay='600'
                    >
                    </div>
                    
                    {/* Placeholder — replace with your own image in src/assets/ */}
                    <div
                        className={`absolute inset-0 rounded-full w-full h-full z-10
                        flex items-center justify-center transition-all duration-300
                        ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
                        data-aos='zoom-in'
                        data-aos-delay='400'
                    >
                        <i className={`fas fa-briefcase text-5xl opacity-30
                            ${darkMode ? 'text-green-400' : 'text-blue-400'}`} />
                    </div>
                </div>
            </figure>
            
            {/* Right column - Text content and statistics */}
            <article 
                data-aos='fade-left'                // Slide-in animation
                data-aos-delay='300' 
                className='text-center lg:text-left relative order-1 lg:order-2' // Mobile order
            >
                <header>
                    {/* Gradient heading */}
                    <h1 
                        className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6
                        text-transparent bg-gradient-to-r from-green-600 to-green-400 bg-clip-text'
                        data-aos='fade-up' 
                        data-aos-delay='400'
                    >
                        About Me
                    </h1>
                </header>
                
                {/* Content paragraph with gradient background */}
                <p 
                    className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8
                    leading-relaxed bg-gradient-to-r from-green-900/50 to-green-900/10 
                    p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm`}
                    data-aos='fade-up' 
                    data-aos-delay='500'
                >
                    I'm a Senior Product Manager with deep experience in B2B SaaS. I specialize in translating complex customer problems into clear product roadmaps, aligning engineering, design, and go-to-market teams around measurable outcomes.
                    I work at the intersection of strategy and execution — running discovery, shaping prioritization frameworks, and driving features from concept to launch. I'm passionate about building products that genuinely move the needle for businesses and the people who use them.
                </p>
                
                {/* Statistics section */}
                <div className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8'>
                    
                    {/* Years in Tech */}
                    <div className='text-center' data-aos='fade-up' data-aos-delay='600'>
                        <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400'>6+</div>
                        <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                            Years in Tech
                        </div>
                    </div>
                    
                    {/* Professional Experience */}
                    <div className='text-center' data-aos='fade-up' data-aos-delay='600'>
                        <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400'>8 months</div>
                        <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                            Professional Experience
                        </div>
                    </div>
                    
                    {/* Projects Completed */}
                    <div className='text-center' data-aos='fade-up' data-aos-delay='600'>
                        <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400'>15+</div>
                        <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                            Projects Completed
                        </div>
                    </div>
                </div>
                
                {/* Call-to-action button */}
                <a href="https://www.linkedin.com/in/rohan-sartho/" target="_blank" rel="noopener noreferrer">
                    <SecondaryButton darkMode={darkMode}>
                        Learn More
                    </SecondaryButton>
                </a>

            </article>
        </div>
    </section>
  );
};

export default About