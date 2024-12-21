/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "354px",
      md: "672px",
      lg: "920px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#3D92FF",
        secondary: "#1D242D",
        section: "#FFFFFF0D",
        extra: "#0075FF0D",
        textColor: "#fcf7f8",
        blackBG: "#0a0a0a",
        secondaryBlack: "#161616",
        lightGray: "#a8a8a8",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(36, 59, 85, 1) 1%, rgba(20, 30, 48, 1) 100%)",
      },
    },
  },
  plugins: [],
};
