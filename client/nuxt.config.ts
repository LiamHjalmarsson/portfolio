import tailwindcss from "@tailwindcss/vite";

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
		"nuxt-gtag",
	],

	css: ["./app/assets/css/main.css"],

	vite: {
		plugins: [tailwindcss()],
	},

	vgsap: {
		presets: [],
		breakpoint: 768,
		scroller: "",
		composable: true,
	},

	gtag: {
		id: "G-LQTJ7HQDB0",
	},
});

