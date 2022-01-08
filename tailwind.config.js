module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: "var(--step--2)",
      sm: "var(--step--1)",
      base: "var(--step-0)",
      lg: "var(--step-2)",
      xl: "var(--step-3)",
      "2xl": "var(--step-4)",
      "3xl": "var(--step-5)",
      "4xl": "var(--step-6)",
      "5xl": "var(--step-7)",
      "6xl": "var(--step-8)",
      "7xl": "var(--step-9)",
    },
    fontFamily: {
      sans: ["FK Grotesk", "sans-serif"],
      serif: ["FK Roman Display", "serif"],
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {},
  },
  plugins: [],
};
