import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        "cream-dark": "#EDE8DC",
        stone: "#9B9589",
        "stone-light": "#C8C3BA",
        charcoal: "#1C1C1A",
        "charcoal-soft": "#2E2E2C",
        sage: "#6d91a3",
        "sage-light": "#8FAFC0",
        mint: "#57cc99",
        "mint-light": "#7DD9AE",
        warm: "#D4C5A9",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      letterSpacing: {
        widest: "0.2em",
        "ultra-wide": "0.3em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-left": "slideLeft 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        "scroll-line": "scrollLine 2s ease-in-out infinite",
        breathe: "breathe 8s ease-in-out infinite",
        "breathe-slow": "breathe 10s ease-in-out infinite",
        "breathe-glow": "breatheGlow 8s ease-in-out infinite",
        "breathe-text": "breatheText 8s ease-in-out infinite 2s",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scrollLine: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.18)" },
        },
        breatheGlow: {
          "0%, 100%": { transform: "scale(0.92)", opacity: "0.4" },
          "50%": { transform: "scale(1.12)", opacity: "1" },
        },
        breatheText: {
          "0%, 100%": { opacity: "0.7", letterSpacing: "-0.01em" },
          "50%": { opacity: "1", letterSpacing: "0.02em" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
