const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
      mono: ["Fira Code", defaultTheme.fontFamily.mono],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
