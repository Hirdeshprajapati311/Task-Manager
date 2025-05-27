/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F0F0F0",
        "primary/100": "#DCE4FF",
        "primary/200": "#F5F5F7",
        "primary/500": "#546FFF",
        secondary: "#FFFFFF",
        "secondary/300": "#8E92BC",
        "secondary/500": "#141522",
        "yellow/100": "#FFB054",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};

