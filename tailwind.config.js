/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fcfcfa",
          "200": "rgba(255, 255, 255, 0.5)",
        },
        darkcyan: "#1a8d91",
        white: "#fff",
        "accent-blue": "#28e3e9",
        black: "#045a5c",
        "secondary-30": "rgba(98, 195, 198, 0.3)",
        "secondary-text1": "#365758",
        black1: "#116a6c",
        primary: "#62c3c6",
        "secondary-10": "rgba(98, 195, 198, 0.1)",
        green: "#0d7052",
        "red-5": "rgba(161, 11, 11, 0.05)",
        red: "#a10b0b",
        "green-5": "rgba(13, 112, 82, 0.05)",
        black2: "#0d0d0d",
        "mid-gray-transparent-10": "rgba(129, 145, 145, 0.1)",
        "secondary-text": "#585555",
        yellow: "#ecfeaa",
        azure: "#eef7f7",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        captions: "Sora",
        "sf-pro-display": "'SF Pro Display'",
      },
      borderRadius: {
        "11xl": "30px",
        xl: "20px",
        "base-4": "15.4px",
        "3xs": "10px",
        "7xs-3": "5.3px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      lg: "18px",
      xl: "20px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      mq1800: {
        raw: "screen and (max-width: 1800px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
