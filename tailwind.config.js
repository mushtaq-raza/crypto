/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        textShadow: "0px 0px 2px black",
      },
      backgroundImage: {
        "home-bg-image": "url('/home-bg.webp')",
      },
      colors: {
        primary: "#4C9540",
        hoverColor: "#7CB17A",
        borderColor: "#44863a",
      },
      fontFamily: {
        primaryFont: ["Poppins", "sans-serif"],
        // primaryFont: ["Nova Round", "system-ui"],
      },
    },
  },
  plugins: [require("daisyui")],
};
