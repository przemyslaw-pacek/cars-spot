/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoFlex: ["Roboto Flex", "sans-serif"],
        robotoCond: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
