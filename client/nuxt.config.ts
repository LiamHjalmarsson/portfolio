import tailwindcss from "@tailwindcss/vite";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },

	modules: [
		"@nuxt/a11y",
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/hints",
		"@nuxt/image",
		"@nuxt/icon",
		"v-gsap-nuxt",
		"@tresjs/nuxt",
	],

	image: {
		domains: ["storage.googleapis.com"],
	},

	css: ["./app/assets/css/main.css"],

	vite: {
		plugins: [tailwindcss(), svgLoader()],
	},

	vgsap: {
		presets: [],
		breakpoint: 768,
		scroller: "",
		composable: true,
	},
});

