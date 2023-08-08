/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space_grotesk: 'Space Grotesk',
      },
      keyframes: {
        motion_bg: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': {backgroundPosition: '100% 50%'}
        }
      },
      animation: {
        motion_bg: 'motion_bg 3s ease infinite',
      }
    },
  },
  plugins: [],
}
