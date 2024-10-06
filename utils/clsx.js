const clsx = (...args) => {
    const classes = [];

    args.forEach(arg => {
        if (!arg) return; // Skip falsy values

        if (typeof arg === 'string' || typeof arg === 'number') {
            classes.push(arg); // Add string or number directly
        } else if (Array.isArray(arg)) {
            classes.push(clsx(...arg)); // Recursively flatten arrays
        } else if (typeof arg === 'object') {
            // Process objects: { className: condition }
            for (const [key, value] of Object.entries(arg)) {
                if (value) classes.push(key); // Add key if value is truthy
            }
        }
    });

    return classes.join(' '); // Join classes with space
}

export default clsx;