/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1420px",
    },
    colors: {
      textLight: "#D9D9D9",
      textDark: "#292929",
      textWhite: "#FFFFFF",
      bgDark: "#191919",
      primary: "#009FE3",
      secondary: "#E30613",
    },
    gradientColorStops: {},
    backgroundImage: {
      "hero-pattern-1": "url('/src/assets/images/go-kart.png')",
      "hero-pattern-2": "url('/src/assets/images/jumparena.png')",
      "hero-pattern-3": "url('/src/assets/images/virtual-reality.png')",
      "hero-pattern-4": "url('/src/assets/images/multiball.png')",
      "hero-pattern-5": "url('/src/assets/images/laserova.png')",

      "gradient-banner":
        "linear-gradient(180deg, rgba(25, 25, 25, 0) 52.85%, #191919 100%)",
      "gradient-tab-light":
        "linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, #D9D9D9 100%)",
      "gradient-tab-dark":
        "linear-gradient(90deg, rgba(41, 41, 41, 0.2) 0%, #292929 100%)",
    },

    backgroundPosition: {
      "banner-position": "center",
    },
    fontSize: {
      "3xl": [
        "7.5rem",
        {
          fontWeight: 700,
          lineHeight: "100%",
          letterSpacing: "0",
        },
      ],
    },
    fontFamily: {
      "BigShouldersStencilText-Bold": "BigShouldersStencilText-Bold",
    },
    extend: {},
  },
  plugins: [],
};
