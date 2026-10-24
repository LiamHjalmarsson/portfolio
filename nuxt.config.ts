import tailwindcss from '@tailwindcss/vite'

const googleSiteVerification = process.env.NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION

const gtagId = process.env.NUXT_PUBLIC_GTAG_ID

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

    devtools: { enabled: true },

    modules: [
        '@nuxt/a11y',
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/hints',
        '@nuxt/image',
        '@nuxt/icon',
        'v-gsap-nuxt',
        '@tresjs/nuxt',
        'nuxt-gtag',
    ],

    runtimeConfig: {
        public: {
            siteUrl: 'https://liamhjalmarsson.se',
        },
    },

    routeRules: {
        '/': {
            prerender: true,
        },

        '/images/**': {
            headers: {
                'Cache-Control': 'public, max-age=31536000',
            },
        },

        '/_ipx/**': {
            headers: {
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        },
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'sv',
            },
            meta: googleSiteVerification ? [
                {
                    name: 'google-site-verification',
                    content: googleSiteVerification,
                },
            ] : [],

            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/3d.png',
                },
            ],
        },
    },

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
        {
            path: '~/blocks',
            pathPrefix: false,
        },
    ],

    css: ['~/assets/css/main.css'],

    vite: {
        plugins: [tailwindcss()],
    },

    vgsap: {
        presets: [],
        breakpoint: 768,
        scroller: '',
        composable: true,
    },

    gtag: {
        enabled: Boolean(gtagId),
        id: gtagId ?? '',
    },
})
