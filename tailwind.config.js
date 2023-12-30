/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },width: {
        '400': '32rem',
      }
    },
  },
  plugins: [require("tailwindcss"), require("tailwind-scrollbar-hide")],
};
