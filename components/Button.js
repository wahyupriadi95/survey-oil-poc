const Button = ({
    children,
    variant = 'primary',
    style = 'solid',
    size = 'base',
    className = '',
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: {
            solid: 'bg-primary text-white hover:bg-primary/90 active:bg-primary/80',
            outlined: 'border-2 border-primary text-primary hover:bg-primary/10 active:bg-primary/20',
            link: 'text-primary hover:underline hover:text-primary/90 active:text-primary/80'
        },
        secondary: {
            solid: 'bg-secondary text-white hover:bg-secondary/90 active:bg-secondary/80',
            outlined: 'border-2 border-secondary text-secondary hover:bg-secondary/10 active:bg-secondary/20',
            link: 'text-secondary hover:underline hover:text-secondary/90 active:text-secondary/80'
        }
    };

    const sizes = {
        small: 'px-3 py-1.5 text-sm',
        base: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant][style]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button