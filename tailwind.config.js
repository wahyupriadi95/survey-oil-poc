/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#FDE7E9',  // Lightest shade
          20: '#F9B8BE',  // Light shade
          30: '#F47883',  // Lighter
          40: '#F1515E',  // Light
          50: '#ED1B2F',  // Default brand color
          60: '#C91528',  // Darker
          70: '#A51121',  // Darker shade
          80: '#810D19',  // Even darker
          90: '#5D0912',  // Darkest
          DEFAULT: '#ED1B2F'
        },
        secondary: {
          10: '#E0F2FF',  // Lightest shade
          20: '#B3DFFF',  // Light shade
          30: '#80C6FF',  // Lighter
          40: '#339EFF',  // Light
          50: '#006CB8',  // Default brand color
          60: '#005A99',  // Darker
          70: '#004777',  // Darker shade
          80: '#003558',  // Even darker
          90: '#002339',  // Darkest
          DEFAULT: '#006CB8'
        },
        tertiary: {
          10: '#F5FAE5',  // Lightest shade
          20: '#E4F1BB',  // Light shade
          30: '#CDE391',  // Lighter
          40: '#BCD86C',  // Light
          50: '#ACC42A',  // Default brand color
          60: '#8FA523',  // Darker
          70: '#72841C',  // Darker shade
          80: '#556415',  // Even darker
          90: '#38430E',  // Darkest
          DEFAULT: '#ACC42A'
        },
        neutral: {
          10: '#F4F5F7',  // Lightest gray
          20: '#E5E7EB',  // Lighter gray
          30: '#D1D5DB',  // Light gray
          40: '#9CA3AF',  // Medium light gray
          50: '#6B7280',  // Medium gray
          60: '#4B5563',  // Medium dark gray
          70: '#374151',  // Dark gray
          80: '#1F2937',  // Darker gray
          90: '#111827',  // Darkest gray
          DEFAULT: '#6B7280'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Headers (h1-h6)
        'h1': ['2.5rem', { // 40px
          lineHeight: '1.2',
          fontWeight: '700'
        }],
        'h2': ['2rem', { // 32px
          lineHeight: '1.2',
          fontWeight: '700'
        }],
        'h3': ['1.75rem', { // 28px
          lineHeight: '1.3',
          fontWeight: '700'
        }],
        'h4': ['1.5rem', { // 24px
          lineHeight: '1.3',
          fontWeight: '700'
        }],
        'h5': ['1.25rem', { // 20px
          lineHeight: '1.4',
          fontWeight: '700'
        }],
        'h6': ['1.125rem', { // 18px
          lineHeight: '1.4',
          fontWeight: '700'
        }],
        // Body (b1-b6)
        'b1': ['1.25rem', { // 20px
          lineHeight: '1.5',
          fontWeight: '500'
        }],
        'b2': ['1.125rem', { // 18px
          lineHeight: '1.5',
          fontWeight: '500'
        }],
        'b3': ['1rem', { // 16px
          lineHeight: '1.5',
          fontWeight: '500'
        }],
        'b4': ['0.875rem', { // 14px
          lineHeight: '1.5',
          fontWeight: '500'
        }],
        'b5': ['0.75rem', { // 12px
          lineHeight: '1.5',
          fontWeight: '500'
        }],
        'b6': ['0.625rem', { // 10px
          lineHeight: '1.5',
          fontWeight: '500'
        }]
      }
    },
  },
  plugins: [],
};
