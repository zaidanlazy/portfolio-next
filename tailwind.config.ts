import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050914",
        bgAlt: "#0D1527",
        ink: "#EEF4FF",
        inkSoft: "#A7B5CF",
        inkFaint: "#71819F",
        accent: "#75A8FF",
        accentSoft: "#14274A",
        highlight: "#8EDFFF",
        border: "#24324B",
      },
      fontFamily: {
        display: ["var(--font-acorn)", "var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-gt)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      transitionProperty: {
        "height-opacity": "height, opacity",
      },
    },
  },
  plugins: [],
};
export default config;
