
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#008080', // Deep Teal (Base)
          900: '#134e4a',
          950: '#042f2e',
        },
        secondary: {
          50: '#f7fceb',
          100: '#ecf9d3',
          200: '#dcf3a9',
          300: '#c5ea77',
          400: '#aedb4a',
          500: '#80b918', // Organic Green (Base)
          600: '#649510',
          700: '#4c7210',
          800: '#3f5b11',
          900: '#354d12',
          950: '#1b2a06',
        },
        surface: {
          DEFAULT: '#f8f9fa',
          dark: '#e9ecef',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
