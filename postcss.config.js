export default {
  content: [
    './public/**/*.html',   // Scan the public folder for HTML files
    './src/**/*.{html,js,ts}', // Scan any HTML, JS, or TS files in src folder
  ],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
