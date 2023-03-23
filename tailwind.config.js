module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        bluegray_50: "#eaecf0",
        blue_800: "#004bcc",
        gray_900: "#0f1728",
        bluegray_100: "#cfd4dc",
        yellow_50: "#fff9eb",
        red_500: "#f04437",
        gray_50: "#fbfcfc",
        gray_100: "#f2f3f6",
        bluegray_800: "#344053",
        gray_900_0c: "#1018280c",
        bluegray_700: "#475466",
        deep_orange_900: "#b54707",
        bluegray_300: "#98a1b2",
        gray_900_0f: "#1018280f",
        white_A700: "#ffffff",
      },
      fontFamily: { ibmplexsans: "IBM Plex Sans" },
      boxShadow: {
        bs: "0px 1px  2px 0px #1018280c",
        bs1: "0px 1px  2px 0px #1018280f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
