/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: {
          100: "#ffffff",
          200: "#f8f8f8",
          300: "#f0f0f0",
        },
        black: {
          100: "#000000",
          200: "#0a0a0a",
          300: "#141414",
        },
        gray: {
          100: "#f8f8f8",
          200: "#f0f0f0",
          300: "#e8e8e8",
        },
        red: {
          100: "#ff0000",
          200: "#e60000",
          300: "#cc0000",
        },
      },
    },
    plugins: [],
  },
};
