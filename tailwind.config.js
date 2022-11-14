/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        evolution: "#FB6D3A",
        evolutionGrey: "#B3B6B6",
        evolutionIce: "#F6F6F5",
      },
      flexGrow: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
      },
    },
  },
  plugins: [],
};
