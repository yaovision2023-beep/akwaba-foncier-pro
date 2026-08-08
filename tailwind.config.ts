import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        forest: {
          DEFAULT: "#1B4332",
          dark: "#122E22",
          light: "#2D6A4F",
        },
        gold: {
          DEFAULT: "#B8860B",
          dark: "#8C6508",
          light: "#D4A537",
        },
        cream: "#FAF7F2",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
