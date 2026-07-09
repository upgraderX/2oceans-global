/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        deepwater: "#161616",   // ink — dark bands, footer, text
        paper: "#F6F4EF",       // bone — warm page ground
        harbor: "#242424",      // secondary dark
        meridian: "#146152",    // pitch green — spec labels, artifacts
        signal: "#EA4E1B",      // match orange — CTAs, IDs, accents
        mist: "#9B968B",        // warm gray — captions, borders
        slotbg: "#EAE5DB",      // image slot ground
      },
      fontFamily: {
        display: ["'Clash Display'", "system-ui", "sans-serif"],
        sans: ["'General Sans'", "system-ui", "sans-serif"],
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: { site: "1280px" },
    },
  },
  plugins: [],
};
