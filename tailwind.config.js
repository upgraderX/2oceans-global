/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        deepwater: "#0B1B2B",   // near-black marine navy — dark sections, footer
        paper: "#F7F5F0",       // warm off-white — page ground
        harbor: "#123049",      // secondary navy — cards on dark
        meridian: "#1E6E6E",    // teal — links, chart lines
        signal: "#E85D26",      // the single hot accent — CTAs, route origins
        mist: "#8A93A0",        // graphite — captions, borders, muted text
      },
      fontFamily: {
        display: ["'Cabinet Grotesk'", "system-ui", "sans-serif"],
        sans: ["'General Sans'", "system-ui", "sans-serif"],
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: { site: "1280px" },
    },
  },
  plugins: [],
};
