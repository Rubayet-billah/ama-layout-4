/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        customTheme: {
          primary: "#0E0F3B",
          secondary: "#F7931E",
          accent: "#222222",
          neutral: "#F1FCFA",
          info: "#0A54FF",
        },
      },
    ],
  },
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    extend: {
      colors: {
        primary: "#0E0F3B",
        secondary: "#F7931E",
        accent: "#222222",
        neutral: "#F1FCFA",
        info: "#0A54FF",
        tertiary: "#FFEDE8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};