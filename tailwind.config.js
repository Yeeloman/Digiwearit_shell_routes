/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',   // Scan the public folder for HTML files
    './src/**/*.{html,js,ts}', // Scan any HTML, JS, or TS files in src folder
    './index.ts'            // Scan the top-level index.ts
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
