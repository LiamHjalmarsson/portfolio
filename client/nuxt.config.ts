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

	app: {
		head: {
			meta: [
				{
					name: "google-site-verification",
					content: process.env.NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
				},
			],
		},
	},

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
		id: process.env.NUXT_PUBLIC_GTAG_ID,
	},
});
