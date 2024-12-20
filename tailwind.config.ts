import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0D0D0D",
        background: "#1A1A1A",
        foreground: "#F2F2F2",
        primary: {
          DEFAULT: "#4EA8DE",
          dark: "#1E6F9F",
        },
        purple: "#5E60CE",
        muted: {
          DEFAULT: "#808080",
          foreground: "#262626",
        },
        destructive: "#B00020",
        border: "#333333",
      },
    },
  },
  plugins: [],
} satisfies Config;
