/**
 * Primary Button — no animations, light-only, orange theme
 */

const PrimaryButton = ({
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
                text-white
                bg-gradient-to-r from-orange-700 to-orange-600
                border-0
                py-3 px-6
                rounded-full
                font-semibold
                hover:opacity-90 hover:scale-[1.02]
                transition-all duration-200
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
