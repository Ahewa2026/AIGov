import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        paper: "#F7F8FA",
        brand: {
          50: "#EEF4FF",
          100: "#DCE8FF",
          400: "#5B8DEF",
          500: "#3866D6",
          600: "#2A50B0",
          700: "#1F3C87",
        },
        accent: "#17B897",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
