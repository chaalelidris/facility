import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsla(var(--background))",
        foreground: "hsla(var(--foreground))",
        card: {
          DEFAULT: "hsla(var(--card))",
          foreground: "hsla(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsla(var(--popover))",
          foreground: "hsla(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsla(var(--primary))",
          foreground: "hsla(var(--primary-foreground))",
          hover: "hsla(var(--primary-hover))",
          
        },
        secondary: {
          DEFAULT: "hsla(var(--secondary))",
          foreground: "hsla(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsla(var(--muted))",
          foreground: "hsla(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsla(var(--accent))",
          foreground: "hsla(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsla(var(--destructive))",
          foreground: "hsla(var(--destructive-foreground))",
        },
        border: "hsla(var(--border))",
        input: "hsla(var(--input))",
        ring: "hsla(var(--ring))",
        chart: {
          "1": "hsla(var(--chart-1))",
          "2": "hsla(var(--chart-2))",
          "3": "hsla(var(--chart-3))",
          "4": "hsla(var(--chart-4))",
          "5": "hsla(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsla(var(--sidebar-background))",
          foreground: "hsla(var(--sidebar-foreground))",
          primary: "hsla(var(--sidebar-primary))",
          "primary-foreground": "hsla(var(--sidebar-primary-foreground))",
          accent: "hsla(var(--sidebar-accent))",
          "accent-foreground": "hsla(var(--sidebar-accent-foreground))",
          border: "hsla(var(--sidebar-border))",
          ring: "hsla(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      maxWidth: {
        "8xl": "85rem",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
