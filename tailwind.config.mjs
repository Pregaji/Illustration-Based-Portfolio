/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#000",
      white: "#fff",
      transparent: "transparent",
      current: "currentColor",
      zinc: {
        100: "#F8F8F8",
        200: "#F0F0F0",
        300: "#E8E8E8",
        400: "#D8D8D8",
        500: "#C8C8C8",
        600: "#B0B0B0",
        700: "#787878",
        800: "#505050",
        900: "#383838",
      },
    },
    extend: {
      colors: {
        brand: {
          bg:          "#F6F1E8",
          surface:     "#FFFDF9",
          text:        "#1E1D1A",
          muted:       "#6F6A63",
          teal:        "#2E6F73",
          tealHover:   "#245A5E",
          tealLight:   "#E8F2F2",
          terracotta:  "#C46A4A",
          border:      "#D9D0C3",
        },
      },
      fontFamily: {
        Sora:    ["var(--font-sora)", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
    },
  },
};