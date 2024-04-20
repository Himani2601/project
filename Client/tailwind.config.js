/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", require("flowbite-react/tailwind").content()],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite-react/tailwind").plugin()],
};