import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "sans-serif",
        ],
      },
      colors: {
        // 따뜻한 크림 → 살구 톤 팔레트
        cream: "#fdf8f1",
        apricot: "#fbe1cc",
        cocoa: {
          400: "#a8978a",
          500: "#8a786b",
          700: "#4a3c33",
          900: "#2b211b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
