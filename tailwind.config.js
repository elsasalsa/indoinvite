module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Neue"', 'cursive'],
      },
      keyframes: {
        floatLeft: {
          "0%": { transform: "rotate(0deg) translateX(0)" },
          "25%": { transform: "rotate(-4deg) translate(-10px, -6px)" },
          "50%": { transform: "rotate(0deg) translate(0, 0)" },
          "75%": { transform: "rotate(4deg) translate(10px, 6px)" },
          "100%": { transform: "rotate(0deg) translateX(0)" },
        },
        floatRight: {
          "0%": { transform: "rotate(0deg) translateX(0)" },
          "25%": { transform: "rotate(4deg) translate(10px, -6px)" },
          "50%": { transform: "rotate(0deg) translate(0, 0)" },
          "75%": { transform: "rotate(-4deg) translate(-10px, 6px)" },
          "100%": { transform: "rotate(0deg) translateX(0)" },
        },
        floatX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" }, 
        },
        shine: {
          "0%": { opacity: "0.2" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.2" },
        },
      },
      animation: {
        "float-left": "floatLeft 5s linear infinite",
        "float-right": "floatRight 5s linear infinite",
        "float-x": "floatX 4s ease-in-out infinite",
        "shine": "shine 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
