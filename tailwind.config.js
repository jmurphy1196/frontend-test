/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textStrokeColor: {
        black: "#000",
        white: "#fff",
      },
      textStrokeWidth: {
        1: "1px",
        2: "2px",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".text-stroke": {
          WebkitTextStrokeColor: theme("textStrokeColor.black"), // default to black
          WebkitTextStrokeWidth: theme("textStrokeWidth.1"), // default to 1px
        },
        ".text-stroke-white": {
          WebkitTextStrokeColor: theme("textStrokeColor.white"),
        },
        // ... add other colors as needed
        ".text-stroke-width-2": {
          WebkitTextStrokeWidth: theme("textStrokeWidth.2"),
        },
        // ... add other widths as needed
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
