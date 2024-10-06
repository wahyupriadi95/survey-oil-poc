const Radio = ({
    label,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseClasses = 'relative flex items-center';

    const radioClasses = 'appearance-none h-5 w-5 rounded-full border transition-colors duration-200 checked:border-[8px] focus:outline-none cursor-pointer';

    const variants = {
        primary: 'border-gray-300 checked:border-[#1F75B5]',
        secondary: 'border-gray-300 checked:border-[#E52F3C]'
    };

    return (
        <label className={`${baseClasses} ${className}`}>
            <input
                type="radio"
                className={`${radioClasses} ${variants[variant]}`}
                {...props}
            />
            {label && <span className="ml-2 text-gray-700">{label}</span>}
        </label>
    );
};

export default Radio