/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#bae0ff',
          300: '#7cc5ff',
          400: '#38a8ff',
          500: '#0e8aff',
          600: '#0070e0',
          700: '#0057b3',
          800: '#004590',
          900: '#003872',
          light: '#3b82f6',
          DEFAULT: '#1e40af',
          dark: '#1e3a8a',
        },
        gold: {
          DEFAULT: '#b45309',
          light: '#d97706',
          dark: '#92400e',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}