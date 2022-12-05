/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#0f171e",
      secondary: "#1a242f",
      fontPrimary: "#ffffff",
      fontSecondary: "#79b8f3",
    },
    extend: {
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
};
