/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f7f1',
          100: '#d9eedd',
          200: '#b3ddb9',
          300: '#7ec48a',
          400: '#4fa65f',
          500: '#4a7c52',
          600: '#3d6845',
          700: '#325538',
          800: '#27432c',
          900: '#1c3120',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
