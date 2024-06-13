import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgColor: "#ffffff",
        darkBlueColor: "#1c476e",
        color: "#191919",
        greyColor: "#999",
        blueColor: "#3897f0",
        whiteColor: "#FFFFFF",
        modalOverlayColor: "rgba(250, 250, 250, 0.93)",
        modalBgColor: "rgba(250, 250, 250, 0.4)",
        borderColor: "rgba(207, 207, 207, 0.7)",
        blackColor: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
