/**
 * Hero Section Component
 * Main introductory section with profile information, social links, and CTA buttons.
 * Profile photo and resume are managed via the Admin Panel (/?admin=true).
 */

import { lightTheme, darkTheme } from '../theme/theme';
import { PrimaryButton } from './ui'
import { motion } from 'framer-motion'

/**
 * Hero Component
 * @param {Object} props
 * @param {boolean} props.darkMode
 * @param {string|null} props.profileImage - base64 data URL from admin upload
 * @param {string|null} props.resumeData - base64 data URL from admin upload
 */
const Hero = ({ darkMode, profileImage, resumeData }) => {
    const socialIcons = [
        { icon: 'fab fa-linkedin', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/rohan-sartho/' },
        { icon: 'fab fa-github',   alt: 'GitHub',   href: 'https://github.com/SarthakBharad' },
        { icon: 'fas fa-envelope', alt: 'Email',    href: 'mailto:rohansartho@gmail.com' },
        { icon: 'fas fa-phone',    alt: 'Mobile',   href: 'tel:+16476852137' },
    ];

    const theme = darkMode ? darkTheme : lightTheme;

    return (
    <div className={`relative overflow-x-hidden flex flex-col min-h-screen ${theme.backgroundPrimary}`}>
        <section
            id='home'
            data-aos='fade-up'
            data-aos-delay='250'
            className='body-font z-10'
        >
            <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col
            lg:flex-row items-center justify-between lg:mt-14 mt-14'>

                {/* Left content column */}
                <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>

                    {/* Social icons */}
                    <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
                        {socialIcons.map((item, index) => (
                            <a
                            key={index}
                            href={item.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            data-aos='fade-up'
                            data-aos-delay={`${400 + index * 100}`}
                            className={`transform hover:scale-110 transition-all duration-300
                            text-2xl sm:text-3xl ${theme.textPrimary} hover:${theme.textHover}`}
                            title={item.alt}>
                                <i className={item.icon}></i>
                            </a>
                        ))}
                    </div>

                    {/* Main heading */}
                    <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                     data-aos='fade-up'
                     data-aos-delay='500'>
                        Hi, I'm Rohan Sartho.
                    </h1>

                    {/* Introduction paragraph */}
                    <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
                     data-aos='fade-up'
                     data-aos-delay='600'>
                        A Senior Product Manager specializing in B2B SaaS. I drive product strategy through
                        data-informed decisions, cross-functional collaboration, and a relentless focus on
                        customer outcomes. Passionate about building products that scale.
                    </p>

                    {/* CTA buttons */}
                    <div className='w-full pt-4 sm:pt-6'>
                        <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                         data-aos='fade-up'
                         data-aos-delay='700'>

                            {/* Download CV — only shown once a resume has been uploaded via Admin Panel */}
                            {resumeData && (
                                <a href={resumeData} download="Rohan_Sartho_Resume.pdf" className='w-full sm:w-auto'>
                                    <PrimaryButton darkMode={darkMode} fullWidth>
                                        <i className='fas fa-download mr-2'></i>
                                        Download CV
                                    </PrimaryButton>
                                </a>
                            )}

                            {/* Contact button */}
                            <a href='#contact' className='w-full sm:w-auto'>
                                <PrimaryButton darkMode={darkMode} fullWidth>
                                    <i className='fas fa-envelope mr-2'></i>
                                    Contact Me
                                </PrimaryButton>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right column - Profile image */}
                <div className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
                 data-aos='fade-up'
                 data-aos-delay='400'>
                    <div className='relative w-4/5 sm:w-3/4 lg:w-full aspect-square'>
                        <div className='relative overflow-hidden rounded-full w-full h-full'>
                            {profileImage ? (
                                <img
                                    src={profileImage}
                                    alt="Rohan Sartho"
                                    className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-500'
                                />
                            ) : (
                                /* Placeholder shown until photo is uploaded via Admin Panel */
                                <div className={`w-full h-full flex flex-col items-center justify-center
                                    ${darkMode ? 'bg-gray-800 text-gray-500' : 'bg-gray-200 text-gray-400'}`}>
                                    <i className='fas fa-user text-6xl mb-3 opacity-40'></i>
                                    <span className='text-xs opacity-50'>Add photo via Admin Panel</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
  );
};

export default Hero
