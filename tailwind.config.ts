import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Times New Roman", "serif"],
      },
      colors: {
        cream: "#f7f9f2",
        sage: {
          DEFAULT: "#e4ead9",
          dark: "#c7d2b5",
        },
        forest: {
          DEFAULT: "#1f2a20",
          light: "#57644f",
          muted: "#7c876f",
        },
        coral: {
          DEFAULT: "#dd5a35",
          light: "#ea7a55",
          dark: "#b8471f",
        },
      },
    },
  },
  plugins: [],
};

export default config;
