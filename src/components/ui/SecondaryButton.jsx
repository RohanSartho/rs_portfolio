/**
 * Secondary Button — no animations, light-only, orange border
 */

const SecondaryButton = ({
    children,
    className = "",
    fullWidth = false,
    ...props
}) => {
    return (
        <button
            className={`
                ${fullWidth ? "w-full" : ""}
                inline-flex items-center justify-center
                text-gray-800
                border-2 border-orange-700
                hover:bg-orange-700 hover:text-white
                bg-transparent
                py-3 px-6
                rounded-full
                font-semibold
                transition-colors duration-200
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
};

export default SecondaryButton;
