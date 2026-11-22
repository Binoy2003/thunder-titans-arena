/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        titan: {
          orange: "#F58216",
          black: "#111111",
          dark: "#202020",
          card: "#181818",
          surface: "#141414",
          lime: "#D7FF4D",
          white: "#FFFFFF",
          muted: "#9E9E9E",
          border: "#2C2C2C",
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(245, 130, 22, 0.4)',
        'glow-lime': '0 0 20px -3px rgba(215, 255, 77, 0.4)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'lightning-flash': 'flash 4s ease-in-out infinite',
      },
      keyframes: {
        flash: {
          '0%, 100%': { opacity: '0.9' },
          '48%': { opacity: '0.9' },
          '50%': { opacity: '1', filter: 'brightness(1.3)' },
          '52%': { opacity: '0.9' },
        }
      }
    },
  },
  plugins: [],
}
