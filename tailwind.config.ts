import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d8e8ff",
          200: "#b4d3ff",
          300: "#8bb9ff",
          400: "#5b95ff",
          500: "#2f6dff",
          600: "#1d4ed8",
          700: "#1d3cb8",
          800: "#1c3090",
          900: "#182364"
        }
      },
      boxShadow: {
        focus: "0 0 0 3px rgba(47,109,255,0.4)"
      }
    }
  },
  plugins: [animate]
};

export default config;
