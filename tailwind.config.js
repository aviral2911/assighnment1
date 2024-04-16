/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        mediumslateblue: "#3957f5",
        royalblue: "#5e7dff",
        deepskyblue: "#29aef9",
        gray: {
          "100": "#232323",
          "200": "rgba(255, 255, 255, 0.7)",
          "300": "rgba(0, 0, 0, 0.5)",
        },
        steelblue: "#718ebf",
        aliceblue: {
          "100": "#edf1f7",
          "200": "#e6eff5",
          "300": "#dfebf2",
          "400": "#dfeaf2",
        },
        blue: "#1814f3",
        blueviolet: "#4a47ff",
        "primary-2": "#343c6a",
        whitesmoke: {
          "100": "#f5f7fa",
          "200": "#f3f3f5",
        },
        turquoise: "#16dbcc",
        palevioletred: "#ff82ac",
        darkgray: "#b1b1b1",
        mediumaquamarine: "#41d4a8",
        tomato: "#ff4b4a",
        "primary-3": "#2d60ff",
        lightsteelblue: "#8ba3cb",
      },
      spacing: {},
      fontFamily: {
        "body-two-regular-15p": "Inter",
        lato: "Lato",
        abel: "Abel",
      },
      borderRadius: {
        "8xs": "5px",
        "6xl": "25px",
        "31xl": "50px",
        "11xl": "30px",
        "3xs": "10px",
        "21xl": "40px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "5xl": "24px",
      "19xl": "38px",
      "4xl": "23px",
      "11xl": "30px",
      "21xl": "40px",
      "23xl": "42px",
      sm: "14px",
      xs: "12px",
      smi: "13px",
      mini: "15px",
      "3xl": "22px",
      lg: "18px",
      xl: "20px",
      mid: "17px",
      "9xl": "28px",
      "6xl": "25px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
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
