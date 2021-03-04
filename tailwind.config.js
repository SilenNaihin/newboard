module.exports = {
  purge: ["./pages/**/*", "./components/**/*",'./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "media",
  theme: {
    extend: {
      width: {
        '19/20': '95%',
      },
      height: {
        '1/10': '10%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/typography")
  ],
}