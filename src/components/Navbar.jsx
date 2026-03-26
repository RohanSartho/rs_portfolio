/**
 * Navigation Bar — light-only, no animations
 */

import { lightTheme } from '../theme/theme';
import { PrimaryButton } from './ui';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const theme = lightTheme;

const navItems = [
    { name: 'Home',       id: '#home' },
    { name: 'About',      id: '#about' },
    { name: 'Skills',     id: '#skills' },
    { name: 'Projects',   id: '#projects' },
    { name: 'References', id: '#references' },
    { name: 'Contact',    id: '#contact' },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (itemName, itemId) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
        const target = document.querySelector(itemId);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="fixed w-full flex justify-center z-50 mt-4 px-4">
            <nav
                className={`
                    w-full max-w-6xl
                    ${theme.navBg}
                    backdrop-blur-lg
                    rounded-2xl
                    px-8 py-3
                    shadow-md
                `}
            >
                <div className="flex items-center justify-between gap-10">
                    <a href="/" className="flex items-center shrink-0">
                        <span className={`text-xl font-bold ${theme.textPrimary}`}>
                            Welcome<span className="text-orange-600">!</span>
                        </span>
                    </a>

                    {/* Desktop nav links */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.id}
                                onClick={(e) => { e.preventDefault(); handleNavClick(item.name, item.id); }}
                                className={`font-medium transition-colors ${
                                    activeSection === item.name.toLowerCase()
                                        ? theme.textActive
                                        : `${theme.textSecondary} hover:text-orange-700`
                                }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop right */}
                    <div className="hidden lg:flex items-center gap-6 shrink-0">
                        <a href="mailto:rohansartho@gmail.com" target="_blank" rel="noopener noreferrer">
                            <PrimaryButton>Hire Me</PrimaryButton>
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <div className="lg:hidden shrink-0">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg ${theme.toggleBg}`}
                        >
                            {isMenuOpen
                                ? <X className={`w-5 h-5 ${theme.textPrimary}`} />
                                : <Menu className={`w-5 h-5 ${theme.textPrimary}`} />
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-gray-200 mt-3">
                        <div className="flex flex-col gap-3 pt-4 pb-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.id}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(item.name, item.id); }}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                        activeSection === item.name.toLowerCase()
                                            ? `bg-orange-50 ${theme.textActive}`
                                            : theme.textSecondary
                                    }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="pt-2">
                                <a href="mailto:rohansartho@gmail.com" target="_blank" rel="noopener noreferrer" className="w-full">
                                    <button className="w-full px-4 py-2 bg-orange-700 text-white font-semibold rounded-full">
                                        Hire Me
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
