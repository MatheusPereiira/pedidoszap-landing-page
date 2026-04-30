/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#dcfce7', // green-100
          DEFAULT: '#22c55e', // green-500
          dark: '#166534', // green-800
        }
      }
    },
  },
  plugins: [],
}
