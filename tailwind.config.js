module.exports = {
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        "custom-gray": "rgb(32, 32, 32)",
        "program-background": "rgb(17, 17, 17)",
      },
    },
  },
  variants: {},
  plugins: [],
};
