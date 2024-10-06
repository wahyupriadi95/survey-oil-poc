const Checkbox = ({
    label,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseClasses = 'relative flex items-center';

    const checkboxClasses = 'appearance-none h-5 w-5 rounded border transition-colors duration-200 checked:bg-current checked:border-current focus:outline-none cursor-pointer relative';

    const variants = {
        primary: 'border-gray-300 text-[#1F75B5]',
        secondary: 'border-gray-300 text-[#E52F3C]'
    };

    return (
        <label className={`${baseClasses} ${className}`}>
            <input
                type="checkbox"
                className={`${checkboxClasses} ${variants[variant]}`}
                {...props}
            />
            <svg
                className="absolute w-3 h-3 left-1 top-1 pointer-events-none hidden peer-checked:block text-white"
                viewBox="0 0 12 12"
            >
                <path
                    d="M3.5 6.5l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                />
            </svg>
            {label && <span className="ml-2 text-gray-700">{label}</span>}
        </label>
    );
};

export default Checkbox