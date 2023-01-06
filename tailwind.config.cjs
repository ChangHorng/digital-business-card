/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      fontSize: {
        "extra-big": ["25px", "30px"],
        "big": ["16px", "150%"],
        "medium": ["12.8px", "15px"],
        "small": ["10.24px", "150%"],
        "button": ["14px", "16px"],
      },
      colors: {
        "white": "#FFFFFF",
        "milk-white": "#F5F5F5",
        "dark-white": "#DCDCDC",
        "light-orange": "#F3BF99",
      },
      boxShadow: {
        "button": "0px 1px 2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
}
