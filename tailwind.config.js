/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
       
        'blurBack' :'#1B1E1F',
        'primary': '#e44a7a',
        'gold':'#A5761D',
        'goldText':'#DB9618'
      }
    },
  },
  plugins: [],
}
