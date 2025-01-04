/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideLeft: 'slideInFromLeft 2s ease-out', // Adjust duration as needed
        slideRight: 'slideInFromRight 2s ease-out', // Adjust duration as needed
        slideBottom: 'slideInFromBottom 2s ease-out', // Adjust duration as needed
      },
      colors: {
        primary: '#FF5733', // Replace with your primary color
        secondary400: '#33C1FF', // Replace with your secondary color
      },
    },
  },
  plugins: [],
}
