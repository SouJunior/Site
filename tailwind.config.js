/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00205F",
        secondary: "#003872",
        primaryHover: "#0C4987",
        submenu: "#006AD7",
        tablePrimary: "rgba(0, 106, 215, 0.2)",
        tableSecondary: "rgba(12, 73, 135, 0.2)",
        "primary+1": "#95C6FF",
      },
    },
  },
  plugins: [],
};
