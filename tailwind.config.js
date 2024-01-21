/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        whiteish: "#FAFAFA",
        green_500: "#00AA7A",
        palatine_blue_500: "#4044E1",
        blue_500: "#133055",
        gray_500: "#20221E",
        rasin_500: "#161221",
        dark_500: "#040615",
      },
      backgroundImage: {
        'home': "url('./src/Assets/Home/liam.png')",
        'education': "url('./src/Assets/About/education.svg')",
        'work': "url('./src/Assets/About/work.svg')",
        "interests": "url('./src/Assets/About/interests.svg')",
        "skills": "url('./src/Assets/About/skills.svg')",
        "projects": "url('./src/Assets/About/projects.svg')",
      },
      boxShadow: {
        right: '12px 0px 7px -7px',
        middle: "0px 0px 20px -4px",
        middle_hover: "0px 0px 30px 4px",
        bottom: "0px 17px 13px -9px",
      },
      screens: {
        'mobil': '320px',    
        'padd': '760px',    
        'laptop': '960px',   
        'desktop': '1200px',    
      },
    },
  },
  plugins: [],
}