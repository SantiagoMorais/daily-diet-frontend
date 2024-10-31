/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceAnimation: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        customBounce: "bounceAnimation 2s infinite"
      },
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
        allAround: "0 0 10px",
      },
    },
  },
  plugins: [],
};
