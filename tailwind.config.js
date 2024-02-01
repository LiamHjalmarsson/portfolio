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
        green_400: "#00AA8A",
        green_500: "#00AA7A",
        dark_600: "#1E2125",
        dark_500: "#040615",

        // Nobel Black 
        nobel_100: "#6f7174", 
        nobel_200: "#595c5f", 
        nobel_300: "#44474b", 
        nobel_400: "#313337", 
        nobel_500: "#1e2125", 
        nobel_600: "#191b1f", 
        nobel_700: "#131619", 
        nobel_800: "#0e1013", 
        nobel_900: "#090b0d",

        // Caribbean Black 
        caribbean_100: "#90d2f1", 
        caribbean_200: "#7bcbef", 
        caribbean_300: "#65c3ec", 
        caribbean_400: "#4bbbe9", 
        caribbean_500: "#26b3e6", 
        caribbean_600: "#209bc8", 
        caribbean_700: "#1984ab", 
        caribbean_800: "#136e8e", 
        caribbean_900: "#0d5873",

        // Velvet Cosmos
        velvet_100: "#8c7095", 
        velvet_200: "#7a5a84", 
        velvet_300: "#684473", 
        velvet_400: "#562f62", 
        velvet_500: "#451952", 
        velvet_600: "#3b1446", 
        velvet_700: "#31103b", 
        velvet_800: "#270b2f", 
        velvet_900: "#1e0725",
      },
      backgroundImage: {
        'home': "url('Assets/Home/liam.png')",
        'education': "url('Assets/About/education.svg')",
        'work': "url('Assets/About/work.svg')",
        "interests": "url('Assets/About/interests.svg')",
        "skills": "url('Assets/About/skills.svg')",


        // skills 
        'css': "url('Assets/About/css.png')",
        'figma': "url('Assets/About/figma.png')",
        'html': "url('Assets/About/html.png')",
        'js': "url('Assets/About/js.png')",
        'php': "url('Assets/About/php.png')",
        'react': "url('Assets/About/react.png')",
        'laravel': "url('Assets/About/laravel.png')",
        'svelte': "url('Assets/About/svelte.png')",
        'tailwind': "url('Assets/About/tailwind.png')",
        'webflow': "url('Assets/About/webflow.png')",

      },
      boxShadow: {
        right: '12px 0px 7px -7px',
        middle: "0px 0px 20px -4px",
        middle_hover: "0px 0px 30px 4px",
        bottom: "0px 17px 13px -9px",
      },
      screens: {
        'mobil': '400px',    
        'padd': '760px',    
        'laptop': '960px',   
        'desktop': '1200px',    
      },
    },
  },
  plugins: [],
}