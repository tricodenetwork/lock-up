/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0057DB",
        secondary: "#FED8DA",
        star: "#298772",
        lightyellow: "#fff47a",
        midorange: "#f69d3c",
        status_bg: "#E0F2EE",
        background: "#F0F6FF",
        ash: "#d7d7d7",
        ash2: "#aab2c8",
        ash3: "#6d71a",
      },
    },
  },
  plugins: [],
};
