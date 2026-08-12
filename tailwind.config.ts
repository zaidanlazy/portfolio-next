import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF8",
        bgAlt: "#F1F3F5",
        ink: "#1B2430",
        inkSoft: "#4B5563",
        inkFaint: "#8B93A1",
        accent: "#3D5A80",
        accentSoft: "#E9EEF5",
        highlight: "#EE9B00",
        border: "#E3E6EA",
      },
      fontFamily: {
              display: ["var(--font-acorn)", "var(--font-space-grotesk)", "sans-serif"],
              body: ["var(--font-gt)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
            // Add some utilities for smoother hover/transform transitions (used in project cards)
            transitionProperty: {
              'height-opacity': 'height, opacity',
            }
    },
  },
  plugins: [],
};
export default config;
