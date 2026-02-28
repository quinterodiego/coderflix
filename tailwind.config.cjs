/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9fafb",
        foreground: "#050608",
        muted: "#6b7280",
        accent: {
          DEFAULT: "#7A1E2C",
          dark: "#651823",
          light: "#8E2A39"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      borderRadius: {
        xl: "1.25rem"
      }
    }
  },
  plugins: []
};

