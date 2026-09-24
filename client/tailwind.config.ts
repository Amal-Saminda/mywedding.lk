import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base surfaces — warm ivory, not the generic cream/near-white
        canvas: "#FBF3EF",
        surface: "#FFFFFF",
        blush: "#F5E1E4",
        // Ink — deep aubergine instead of flat black
        ink: {
          DEFAULT: "#301222",
          soft: "#5A3A4C",
        },
        // Primary — rose/magenta pulled from the logo gradient
        rose: {
          50: "#FCEEF2",
          100: "#F7D6E0",
          300: "#E187A6",
          500: "#B0245C",
          600: "#8F1B49",
          700: "#6E1538",
        },
        // Secondary — deep plum/navy, the groom silhouette tone in the logo
        plum: {
          DEFAULT: "#2A1B3D",
          light: "#4A3560",
        },
        // Accent — antique gold, jewellery / kolam-motif tone
        gold: {
          DEFAULT: "#B8912F",
          light: "#D9BA6C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        sinhala: ["var(--font-sinhala)", "sans-serif"],
      },
      borderRadius: {
        card: "0.375rem",
        pill: "999px",
      },
      boxShadow: {
        card: "0 1px 0 rgba(48, 18, 34, 0.06)",
        lift: "0 12px 30px -14px rgba(48, 18, 34, 0.35)",
      },
      backgroundImage: {
        "rose-plum": "linear-gradient(135deg, #B0245C 0%, #6E1538 55%, #2A1B3D 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
