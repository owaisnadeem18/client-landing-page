// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "spin-horizontal": {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(360deg)" },
        },
      },
      animation: {
        "spin-horizontal": "spin-horizontal 3s linear infinite",
      },
    },
  },
  plugins: [],
}
