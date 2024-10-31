/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CE1212",
        secondary: "#810000",
        bg: "#1B1717",
        text: "#EEEBDD",
      },
      fontFamily: {
        basic: "'Roboto', sans-serif",
        title: "'DM Serif Display', serif",
      },
      boxShadow: {
        allAround: "0 0 10px"
      }
    },
  },
  plugins: [],
};
