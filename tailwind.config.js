/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',   // Scan the public folder for HTML files
    './src/**/*.{html,js,ts}', // Scan any HTML, JS, or TS files in src folder
  ],
  theme: {
    extend: {
      borderRadius: {
        "5xl": "3rem",
      },
    },
  },
  plugins: [],
};
