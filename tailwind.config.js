/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#020617',
        card: 'rgba(30, 41, 59, 0.4)',
        glass: 'rgba(15, 23, 42, 0.6)',
        primary: '#818cf8',
        secondary: '#c084fc',
        accent: '#2dd4bf',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Saira Extra Condensed', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(129, 140, 248, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(129, 140, 248, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
