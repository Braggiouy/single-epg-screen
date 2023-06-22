module.exports = {
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        "custom-gray": "rgb(32, 32, 32)",
        "program-background": "rgb(17, 17, 17)",
        "now-button": "rgb(225, 162, 30)",
      },
      textColor: {
        "custom-faded-grey": "rgb(155, 155, 155)",
        "custom-text-gold": "rgb(225, 162, 30)",
      },
      gradientColorStops: {
        3: "3%",
        20: "20%",
        25: "25%",
        65: "65%",
      },
      linearGradientDirections: {
        180: "180deg",
      },
      linearGradientColors: {
        "black-transparent": [
          "black 3%",
          "transparent 25%",
          "transparent 20%",
          "black 65%",
        ],
      },
    },
  },
  variants: {},
  plugins: [],
};
