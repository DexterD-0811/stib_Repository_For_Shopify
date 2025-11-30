/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.*",
    "./sections/*.*",
    "./snippets/*.*",
    "./templates/*.*",
    "./templates/**/*.*",
    "./**/*.liquid",
    "./assets/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}