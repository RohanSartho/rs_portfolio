/**
 * Footer — minimal, compact
 */

import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="px-8 sm:px-12 py-6 bg-[#f5f1eb] border-t border-gray-200">
            <p className="text-sm text-gray-500 flex items-center gap-1">
                &copy; {year} Rohan Sartho — made with <FaHeart className="text-orange-600 text-xs" />
            </p>
        </footer>
    );
};

export default Footer;
