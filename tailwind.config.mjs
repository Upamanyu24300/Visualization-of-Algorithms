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
          bg: "#140F1A",
          text: "#E5DCED",
          sidebar: "#403C46",
          category: "#524B59",
          button: "#5C4065",
          buttonHover: "#7A5A83",
          accent: "#E5DCED",
          error: "#D14C6B",
          success: "#6BAA75",
          warning: "#E0B567"
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


