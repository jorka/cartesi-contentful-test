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

    extend: {
      maxWidth: {
        "5xl": "58rem",
      },
      colors: {
        gray: {
          50: "#FAFAFB",
          100: "#E0E0E8",
          200: "#C7C7D4",
          300: "#ADADBF",
          400: "#9494AB",
          500: "#7C7B96",
          600: "#646281",
          700: "#4C496C",
          800: "#353157",
          900: "#1E1941",
        },
        blue: {
          50: "#E1EBFF",
          100: "#C1DAF9",
          200: "#85B4FF",
          300: "#709BE3",
          400: "#4D7BD2",
          500: "#2D5ABE",
          600: "#254DA9",
          700: "#1E4092",
          800: "#17347C",
          900: "#112864",
        },
        yellow: {
          50: "#FFFAE6",
          100: "#FFF9CB",
          200: "#FFF6A9",
          300: "#FFF38A",
          400: "#FFEF70",
          500: "#FFE95A",
          600: "#DEB94C",
          700: "#BD8D3E",
          800: "#9C6632",
          900: "#7A4426",
        },
      },
      lineHeight: {
        tighter: 1.1,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              fontSize: "var(--step-0)",
              color: theme.colors.gray[900],
              maxWidth: "none",

              a: {
                color: "inherit",
              },
              h1: {
                fontWeight: "400",
                fontSize: "var(--step-4)",

                color: theme.colors.gray[900],
              },
              h2: {
                fontWeight: "400",
                fontSize: "var(--step-2)",
                color: theme.colors.gray[900],
              },
              h3: {
                fontWeight: "400",
                fontSize: "var(--step-2)",
                color: theme.colors.gray[900],
              },
              h4: {
                fontWeight: "400",
                fontSize: "var(--step-1)",
                color: theme.colors.gray[900],
              },
              h5: {
                fontWeight: "400",
                fontSize: "var(--step-0)",
                color: theme.colors.gray[900],
              },
            },
          ],
        },
        lg: {
          css: [
            {
              fontSize: "var(--step-1)",

              h1: {
                fontWeight: "400",
                fontSize: "var(--step-5)",
              },
              h2: {
                fontWeight: "400",
                fontSize: "var(--step-4)",
              },
              h3: {
                fontWeight: "400",
                fontSize: "var(--step-3)",
              },
              h4: {
                fontWeight: "400",
                fontSize: "var(--step-2)",
              },
              h5: {
                fontWeight: "400",
                fontSize: "var(--step-1)",
              },
            },
          ],
        },
        xl: {
          css: [
            {
              fontSize: "var(--step-2)",
              h1: {
                fontWeight: "400",
                fontSize: "var(--step-6)",
              },
              h2: {
                fontWeight: "400",
                fontSize: "var(--step-5)",
              },
              h3: {
                fontWeight: "400",
                fontSize: "var(--step-4)",
              },
              h4: {
                fontWeight: "400",
                fontSize: "var(--step-3)",
              },
              h5: {
                fontWeight: "400",
                fontSize: "var(--step-2)",
              },
            },
          ],
        },
        "2xl": {
          css: [
            {
              fontSize: "var(--step-3)",
              h1: {
                fontWeight: "400",
                fontSize: "var(--step-7)",
              },
              h2: {
                fontWeight: "400",
                fontSize: "var(--step-6)",
              },
              h3: {
                fontWeight: "400",
                fontSize: "var(--step-5)",
              },
              h4: {
                fontWeight: "400",
                fontSize: "var(--step-4)",
              },
              h5: {
                fontWeight: "400",
                fontSize: "var(--step-3)",
              },
            },
          ],
        },
        invert: {
          css: {
            color: theme.colors.white,

            a: {
              color: "inherit",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
