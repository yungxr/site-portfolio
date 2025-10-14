/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        speeshBlue: "#3b82f6",
        speeshIndigo: "#6366f1",
      },
      borderRadius: {
        'xl-2': '1rem',
      },
      animation: {
        'float-blob': 'float-blob 9s ease-in-out infinite',
      },
      boxShadow: {
        'soft-lg': '0 10px 40px rgba(2,6,23,0.16)',
      },
    },
  },
  plugins: [],
};
