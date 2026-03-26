/**
 * Theme Configuration Module
 * Light-only theme with warm cream background and orange accents
 */

export const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    textHover: 'text-orange-700',
    textActive: 'text-orange-700',

    buttonPrimary: 'from-orange-700 to-orange-600',
    buttonSecondary: 'text-gray-800 border-2 border-orange-700 hover:bg-orange-700 hover:text-white',

    navBg: 'bg-white/90',
    indicator: 'from-orange-700 to-orange-600',
    icon: 'text-orange-700',
    toggleBg: 'bg-gray-100',

    mobileBg: 'bg-white border-gray-200',
    mobileActive: 'bg-orange-50',

    decorativeCircle: 'bg-orange-400 opacity-20',

    backgroundPrimary: 'bg-[#f5f1eb]',

    cardBg: 'bg-white',
    cardSoft: 'bg-gray-100',
    border: 'border-gray-200',
    muted: 'text-gray-500',
    accentGradient: 'from-orange-700 to-orange-500',
};

// Kept as alias so any remaining imports don't break
export const darkTheme = lightTheme;
