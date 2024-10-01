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
          "50%": { "box-shadow": "0 0px 75px 0 rgba(168, 68, 255, 0.5)" },
        },
        bubbleMoveVioletBlue: {
          "50%": { "box-shadow": "0 0px 75px 0 rgba(109, 68, 255, 0.5)" },
        },
        bubbleMoveBlack: {
          "50%": { "box-shadow": "0 0px 75px 0 rgba(21,21,21,0.5)" },
        },
      },
      animation: {
        bubbleMoveLavenderIndigo: "bubbleMoveLavenderIndigo 4s infinite",
        bubbleMoveVioletBlue: "bubbleMoveVioletBlue 4s infinite",
        bubbleMoveBlack: "bubbleMoveBlack 4s infinite",
      },
    },
    fontFamily: {
      custom: ["Silka", "sans-serif"],
    },
  },
  plugins: [],
};
