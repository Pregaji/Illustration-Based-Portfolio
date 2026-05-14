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

      // Original zinc scale — kept so existing components don't break
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

      // Precious Ajiboye — Brand Palette
      brand: {
        bg:          "#F6F1E8",   // warm cream — page background
        surface:     "#FFFDF9",   // slightly lighter — cards, sections
        text:        "#1E1D1A",   // deep ink — primary text
        muted:       "#6F6A63",   // muted warm gray — secondary text
        faint:       "#A09890",   // faint — captions, placeholders
        teal:        "#2E6F73",   // dusty teal — primary accent, CTAs
        tealHover:   "#245A5E",   // teal hover state
        tealLight:   "#E8F2F2",   // teal tint — hover backgrounds
        terracotta:  "#C46A4A",   // terracotta — secondary accent, highlights
        terracottaHover: "#A8533A",
        border:      "#D9D0C3",   // warm border
        divider:     "#E8E0D5",   // subtle divider
      },
    },
    extend: {
      fontFamily: {
        // Keep Sora as fallback so old components don't break
        Sora:    ["var(--font-sora)", "sans-serif"],
        // New brand fonts
        display: ["var(--font-display)", "Instrument Serif", "Georgia", "serif"],
        body:    ["var(--font-body)", "Inter", "sans-serif"],
      },
    },
  },
};