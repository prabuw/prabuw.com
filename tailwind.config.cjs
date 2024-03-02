/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"et-book", Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif', defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
