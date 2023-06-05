/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily :{
        vollkorn: "'Vollkorn', serif",
      }
    },
  },
  plugins: [],
}

