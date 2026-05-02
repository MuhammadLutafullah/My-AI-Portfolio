/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-xxsm": { max: "450px" },
        "max-xsm": { max: "650px" },
        "max-msm": { max: "700px" },
        "max-sm": { max: "1024px" },
        "max-md": { max: "1250px" },
        "max-1460": { max: "1460px" },
        "max-1360": { max: "1360px" },
        "max-1440": { max: "1440px" },
        // "max-1260": { max: "1260px" },
      },
      fontFamily: {
        regular: ['"Outfit-Regular"', "sans-serif"], // Regular font
        extraBold: ['"Outfit-ExtraBold"', "sans-serif"], // Extra Bold font
        bold: ['"Outfit-Bold"', "sans-serif"], // Bold font
        extraLight: ['"Outfit-ExtraLight"', "sans-serif"], // Extra Light font
        semiBold: ['"Outfit-SemiBold"', "sans-serif"], // Semi Bold font
        light: ['"Outfit-Light"', "sans-serif"], // Light font
        thin: ['"Outfit-Thin"', "sans-serif"], // Thin font
        medium: ['"Outfit-Medium"', "sans-serif"], // Medium font
        black: ['"Outfit-Black"', "sans-serif"], // Black font
      },
    },
  },
  plugins: [],
};
