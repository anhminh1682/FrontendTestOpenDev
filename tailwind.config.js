/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1516px",
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

      radialGradientCircle:
        "radial-gradient(50% 50% at 50% 50%, rgba(227, 6, 19, 0.1) 0%, rgba(0, 159, 227, 0.2) 100%)",
    },

    backgroundPosition: {
      "banner-position": "center",
    },
    fontSize: {
      "9xl": [
        "7.5rem",
        {
          fontWeight: 700,
          lineHeight: "8.75rem",
          letterSpacing: "0",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          fontWeight: 700,
          lineHeight: "5.75rem",
          letterSpacing: "0",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          fontWeight: 700,
          letterSpacing: "0",
        },
      ],
      "5xl": [
        "3rem",
        {
          fontWeight: 700,
          letterSpacing: "0",
        },
      ],
      "4xl": [
        "2rem",
        {
          fontWeight: 700,
          letterSpacing: "0",
        },
      ],
      "3xl": [
        "1.75rem",
        {
          fontWeight: 700,
          letterSpacing: 0,
        },
      ],
      "2xl": [
        "1.5rem",
        {
          fontWeight: 700,
          letterSpacing: 0,
        },
      ],
      xl: [
        "1.25rem",
        {
          fontWeight: 700,
          letterSpacing: 0,
        },
      ],
      base: [
        "1rem",
        {
          fontWeight: 400,
          letterSpacing: 0,
          lineHeight: "1.5rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          fontWeight: 400,
          letterSpacing: 0,
          lineHeight: "1.25rem",
        },
      ],
    },
    fontFamily: {
      BigShouldersStencilText: "BigShouldersStencilText",
      SpaceGrotesk: "SpaceGrotesk",
      BigShouldersText: "BigShouldersText",
    },
    extend: {},
  },
  plugins: [],
};
