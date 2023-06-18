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
    },
  },
  variants: {},
  plugins: [],
};
