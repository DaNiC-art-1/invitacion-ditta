import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fff7ec",
        chivasBlue: "#071d49",
        chivasRed: "#c9152e",
        gold: "#d7b56d",
      },
    },
  },
  plugins: [],
};

export default config;
