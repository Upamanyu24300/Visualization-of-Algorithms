/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2DDA4',
        secondary: '#413C58',
        sidebar: '#A3C4BC',
        category: '#BFD7B5',
        button: '#E7EFC5',
        dark: {
          bg: "#181818",
          text: "#D1D1D1",
          sidebar: "#202020",
          category: "#2C2C2C",
          button: "#18A8D4",
          buttonHover: "#5C00B0",
          accent: "#9B66FF",
          error: "#E53935",
          success: "#1E88E5",
          warning: "#FFEB3B"
        },
        code: {
          bg: '#1e1e1e',
          text: '#dcdcdc',
          keyword: '#569cd6',
          string: '#d69d85',
          comment: '#6a9955',
          function: '#dcdcaa',
          number: '#b5cea8',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};


