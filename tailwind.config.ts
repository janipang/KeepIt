import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#6B70F2',
        'primary-dark': '#6069BF',
        'secondary': '#49D6E7',
        'tirtiary': '#43BF76',
        'disable': '#E6E6E6',
        'error': '#F47459',
        'error-light': '#F9A4A4',
        'error-dark': '#FF2020',
        'success': '#28D361',
        'base': '#F4F4F8',
        'base-dark': '#D9D9D9',
      }
    },
    light: {},
    dark: {
      colors: {
        primary: {
          DEFAULT: "#BEF264",
          foreground: "#000000",
        },
        focus: "#BEF264",
      },
    },
    "fantasy-dark": {
      extend: "dark",
      colors: {
        background: "#0D001A",
        foreground: "#ffffff",
        primary: {
          50: "#3B096C",
          100: "#520F83",
          DEFAULT: "#DD62ED",
          foreground: "#ffffff",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
