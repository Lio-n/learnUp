/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lavender-indigo": "#A844FF",
        "violet-blue": "#6D44FF",
        "eerie-black": "#151515",
      },
      keyframes: {
        bubbleMoveLavenderIndigo: {
          "50%": { "box-shadow": "0 0px 75px 5px rgba(168, 68, 255, 1)" },
        },
        bubbleMoveVioletBlue: {
          "50%": { "box-shadow": "0 0px 75px 5px rgba(109, 68, 255, 1)" },
        },
        bubbleMoveBlack: {
          "50%": { "box-shadow": "0 0px 75px 5px rgba(21,21,21,1)" },
        },
      },
      animation: {
        bubbleMoveLavenderIndigo: "bubbleMoveLavenderIndigo 10s infinite",
        bubbleMoveVioletBlue: "bubbleMoveVioletBlue 10s infinite",
        bubbleMoveBlack: "bubbleMoveBlack 10s infinite",
      },
    },
    fontFamily: {
      custom: ["Silka", "sans-serif"],
    },
  },
  plugins: [],
};
