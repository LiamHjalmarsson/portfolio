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
      },
      backgroundImage: {
        'home': "url('/assets/home/liam.png')",
        'education': "url('/assets/about/education.svg')",
        'work': "url('/assets/about/work.svg')",
        "interests": "url('/assets/about/interests.svg')",
        "skills": "url('/assets/about/skills.svg')",


        // skills 
        'css': "url('/assets/about/css.png')",
        'figma': "url('/assets/about/figma.png')",
        'html': "url('/assets/about/html.png')",
        'js': "url('/assets/about/js.png')",
        'php': "url('/assets/about/php.png')",
        'react': "url('/assets/about/react.png')",
        'laravel': "url('/assets/about/laravel.png')",
        'svelte': "url('/assets/about/svelte.png')",
        'tailwind': "url('/assets/about/tailwind.png')",
        'webflow': "url('/assets/about/webflow.png')",

      },
      boxShadow: {
        right: '12px 0px 7px -7px',
        middle: "0px 0px 20px -4px",
        middle_hover: "0px 0px 30px 4px",
        bottom: "0px 17px 13px -9px",
      },
    },
  },
  plugins: [],
}