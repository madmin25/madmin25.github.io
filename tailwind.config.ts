import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        Rubik: ["Rubik Wet Paint", "system-ui"],
        Zen: ["Zen Dots", "serif"],
        custom: ["Anton", "sans-serif"],
    },
    boxShadow: {
      'cInOut': '6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7)',
      'cOutIn': 'inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.15)',
      'cInnerShadow': 'inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(0, 0, 0, 0.2)',
      'cOuterShadow': '3px 3px 3px -1px rgba(0, 0, 0, 0.2), -3px -3px 3px -1px rgba(0, 0, 0, 0.2)',
    }
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
};
export default config;
