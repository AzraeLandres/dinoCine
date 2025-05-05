/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#A2CC9C",
        secondary: "#B3AEE4",
        accent: "#7C99ED",
        background: "#FFFFFF",
        text: "#363636",
        muted: "#888888",
      },
      fontFamily: {
        regular: "Frogie-Regular",
        medium: "Frogie-Regular",
        bold: "Frogie-Regular",
      },
      fontSize: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 28,
      },
    },
  },
  plugins: [],
};
