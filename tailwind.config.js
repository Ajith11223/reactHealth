/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:"#ff5733",
        'card-green': '#36C857',
      },
      backgroundColor: {
        'custom-blue': '#5051F9',
      },
    },
  },
  plugins: [require("daisyui")],
}