/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "40px",
        xxl: "48px",
      },
      fontSize: {
        xxs: "0.625rem",
        h1: ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["18px", { lineHeight: "1.4", fontWeight: "500" }],
        body: ["14px", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "1.4", fontWeight: "300" }],
      },
      colors: {
        primary: "#FF3F3F",
        primaryLight: "#5dade2",
        danger: "#572626",
        success: "#10b981",
        text: "#333333",
        textMuted: "#6b7280",
        background: "#ffffff",
        border: "#e5e7eb",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        spaceMono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
