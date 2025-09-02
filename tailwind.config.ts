import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
        // Brand
        primary: "#00C27A",
        danger: "#FF4D4F",

        // Neutral
        text: "#1A1A1A",
        "text-secondary": "#6B7280",
        border: "#E5E7EB",
        "background-light": "#F9FAFB",
      },
      fontFamily: {
        oleo: ["var(--oleo)"],
        open: ["var(--open)"],
      },
    },
  },
  plugins: [],
};
export default config;
