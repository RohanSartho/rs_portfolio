/**
 * Left Sidebar Navigation
 * Fixed panel with profile photo, nav links, and social icons.
 * Desktop: always visible. Mobile: slide-in drawer toggled by hamburger.
 */

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import defaultPhoto from '../assets/profile.jpg';

const navItems = [
    { label: 'Home',              id: '#home' },
    { label: 'About Me',          id: '#about' },
    { label: 'Product Portfolio', id: '#projects' },
    { label: 'Contact',           id: '#contact' },
];

const socialLinks = [
    { href: 'https://www.linkedin.com/in/rohan-sartho/', icon: <FaLinkedin className="w-5 h-5" /> },
    { href: 'https://github.com/RohanSartho',            icon: <FaGithub    className="w-5 h-5" /> },
    { href: 'mailto:rohansartho@gmail.com',              icon: <FaEnvelope  className="w-5 h-5" /> },
];

const Sidebar = ({ profileImage, resumeData }) => {
    const [active, setActive] = useState('home');
    const [open, setOpen]     = useState(false);

    // Use admin-uploaded photo if present, otherwise fall back to static asset
    const photo = profileImage || defaultPhoto;

    const handleNav = (label, id) => {
        setActive(label.toLowerCase().replace(/\s+/g, ''));
        setOpen(false);
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const panel = (
        <aside className="flex flex-col h-full bg-white border-r border-gray-200 w-64">

            {/* Profile */}
            <div className="flex flex-col items-center pt-10 pb-6 px-6 border-b border-gray-100">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-4">
                    <img
                        src={photo}
                        alt="Rohan Sartho"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                <h2 className="text-lg font-bold text-gray-900 text-center leading-tight">Rohan Sartho</h2>
                <p className="text-xs text-gray-500 mt-1 text-center">Senior Product Manager</p>
            </div>

            {/* Nav */}
            <nav className="flex-1 flex flex-col">
                {navItems.map((item) => {
                    const key = item.label.toLowerCase().replace(/\s+/g, '');
                    const isActive = active === key;
                    return (
                        <a
                            key={item.label}
                            href={item.id}
                            onClick={(e) => { e.preventDefault(); handleNav(item.label, item.id); }}
                            className={`
                                relative flex items-center px-8 py-4
                                text-sm font-medium border-b border-gray-100 transition-colors
                                ${isActive
                                    ? 'text-gray-900 bg-gray-50'
                                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                }
                            `}
                        >
                            {isActive && (
                                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-orange-600 rounded-r-full" />
                            )}
                            {item.label}
                        </a>
                    );
                })}
            </nav>

            {/* CV download */}
            {resumeData && (
                <div className="px-6 py-4 border-t border-gray-100">
                    <a
                        href={resumeData}
                        download="Rohan_Sartho_Resume.pdf"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-orange-700 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                        <i className="fas fa-download text-xs" />
                        Download CV
                    </a>
                </div>
            )}

            {/* Social links */}
            <div className="flex items-center justify-center gap-4 px-6 py-6 border-t border-gray-100">
                {socialLinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-700 hover:text-white transition-colors"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </aside>
    );

    return (
        <>
            {/* Desktop sidebar */}
            <div className="hidden lg:flex fixed inset-y-0 left-0 z-40 w-64">
                {panel}
            </div>

            {/* Mobile hamburger */}
            <button
                onClick={() => setOpen(true)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md border border-gray-200"
            >
                <Menu className="w-5 h-5 text-gray-700" />
            </button>

            {/* Mobile drawer */}
            {open && (
                <div className="lg:hidden fixed inset-0 z-50 flex">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
                    <div className="relative z-10 h-full w-64 shadow-xl">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 p-1.5 rounded-lg bg-gray-100"
                        >
                            <X className="w-4 h-4 text-gray-600" />
                        </button>
                        {panel}
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;
