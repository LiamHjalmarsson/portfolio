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

	runtimeConfig: {
		public: {
			siteUrl: "https://liamhjalmarsson.se",
			googleSiteVerification: process.env.NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
			gtagId: process.env.NUXT_PUBLIC_GTAG_ID ?? "",
		},
	},

	app: {
		head: {
			htmlAttrs: {
				lang: "sv",
			},
			meta: [
				{
					name: "google-site-verification",
					content: process.env.NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
				},
				{
					charset: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
			],

			link: [
				{
					rel: "icon",
					type: "image/png",
					href: "/3d.png",
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
		id: process.env.NUXT_PUBLIC_GTAG_ID ?? "",
	},
});
