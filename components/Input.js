const Input = ({
    size = 'base',
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseClasses = 'rounded-lg border transition-colors duration-200 focus:outline-none';

    const variants = {
        primary: 'border-gray-300 focus:border-[#1F75B5]',
        secondary: 'border-gray-300 focus:border-[#E52F3C]'
    };

    const sizes = {
        small: 'px-3 py-1.5 text-sm',
        base: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    };

    return (
        <input
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        />
    );
};

export default Input