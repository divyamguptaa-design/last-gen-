import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E53935",
          "red-dark": "#C62828",
          sand: "#FFF5F3",
          steel: "#EAD7D2",
          charcoal: "#181312",
          amber: "#FFB703",
          copper: "#C97B45",
          blue: "#1D4ED8",
          mint: "#12B981",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(17, 17, 17, 0.08)",
      },
      backgroundImage: {
        "hero-industrial":
          "linear-gradient(135deg, rgba(198, 40, 40, 1), rgba(229, 57, 53, 0.94))",
      },
    },
  },
  plugins: [],
};

export default config;
