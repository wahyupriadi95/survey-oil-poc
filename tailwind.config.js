/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#E0F2FF',  // Lightest shade
          20: '#99D3F5',  // Light shade
          30: '#1F75B5',  // Default
          40: '#186096',  // Slightly darker
          50: '#114B78',  // Darker shade
          60: '#0A375A',  // Even darker
          70: '#04233B',  // Darkest shade
          DEFAULT: '#1F75B5' // Default color
        },
        secondary: {
          10: '#FFDCE0',  // Lightest shade
          20: '#F78A96',  // Light shade
          30: '#E52F3C',  // Default
          40: '#B5242F',  // Slightly darker
          50: '#861A23',  // Darker shade
          60: '#571118',  // Even darker
          70: '#28090B',  // Darkest shade
          DEFAULT: '#E52F3C' // Default color
        },
      },
    },
  },
  plugins: [],
};
