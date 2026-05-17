import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-variant": "#e5e2e1",
        "secondary-fixed-dim": "#e9c176",
        "on-tertiary-fixed-variant": "#43474a",
        "inverse-on-surface": "#f3f0ef",
        "surface-container-high": "#eae7e7",
        "surface-container-highest": "#e5e2e1",
        "surface-container-lowest": "#ffffff",
        "primary-fixed": "#dbe1ff",
        "on-error-container": "#93000a",
        "primary-container": "#002366",
        "on-primary": "#ffffff",
        "on-surface-variant": "#444650",
        "surface-tint": "#435b9f",
        "outline-variant": "#c5c6d2",
        "secondary": "#775a19",
        "on-error": "#ffffff",
        "primary-fixed-dim": "#b3c5ff",
        "on-secondary-fixed-variant": "#5d4201",
        "background": "#fcf9f8",
        "on-secondary": "#ffffff",
        "tertiary-container": "#25292b",
        "surface-dim": "#dcd9d9",
        "outline": "#757682",
        "inverse-primary": "#b3c5ff",
        "error-container": "#ffdad6",
        "tertiary-fixed": "#e0e3e6",
        "on-tertiary": "#ffffff",
        "surface": "#fcf9f8",
        "secondary-container": "#fed488",
        "tertiary": "#101517",
        "error": "#ba1a1a",
        "on-primary-container": "#758dd5",
        "on-tertiary-fixed": "#181c1e",
        "surface-bright": "#fcf9f8",
        "on-surface": "#1c1b1b",
        "primary": "#00113a",
        "secondary-fixed": "#ffdea5",
        "on-secondary-fixed": "#261900",
        "tertiary-fixed-dim": "#c3c7ca",
        "on-secondary-container": "#785a1a",
        "surface-container": "#f0eded",
        "surface-container-low": "#f6f3f2",
        "inverse-surface": "#313030",
        "on-tertiary-container": "#8c9093",
        "on-primary-fixed": "#00174a",
        "on-background": "#1c1b1b",
        "on-primary-fixed-variant": "#2a4386"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "margin-desktop": "64px",
        "container-max": "1280px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "section-gap": "120px"
      },
      fontFamily: {
        "body-lg": ["var(--font-work-sans)"],
        "body-md": ["var(--font-work-sans)"],
        "headline-sm": ["var(--font-hanken-grotesk)"],
        "display-lg-mobile": ["var(--font-hanken-grotesk)"],
        "label-md": ["var(--font-work-sans)"],
        "headline-md": ["var(--font-hanken-grotesk)"],
        "display-lg": ["var(--font-hanken-grotesk)"]
      },
      fontSize: {
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "headline-sm": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
        "display-lg-mobile": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
        "headline-md": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
      }
    }
  },
  plugins: [],
};
export default config;
