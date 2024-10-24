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
        "soller-font": "#0F172A",
        "soller-tel": "#0369A1",
        "soller-bg": "#FFFFFF",
        "soller-blueBubble": "#BAE6FD",
        "soller-feedback" : "#581C87",
        "soller-orange" : "#D97706",
        "soller-yellow": "#FCD34D",
        "soller-brown" : "#78350F",
        "soller-gray" : "#475569",
        "soller-grayborder" : "#E2E8F0",
        
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
export default config;
