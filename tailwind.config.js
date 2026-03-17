/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#343E16",       // Green
        secondary: "#A8D1E7",     // Light Blue
        dark: "#0F110A",          // Dark Footer
      },
      fontFamily: {
        heading: ["Archivo Black", "sans-serif"],
        subheading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
