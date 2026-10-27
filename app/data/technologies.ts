
export const technologies = {
    php: {
        label: 'PHP',
        category: 'backend',
    },
    laravel: {
        label: 'Laravel',
        logo: 'mdi:laravel',
        category: 'backend',
        size: 'large',
    },
    vue: {
        label: 'Vue',
        logo: 'mdi:vuejs',
        category: 'frontend',
        size: 'large',
    },
    vue3: {
        label: 'Vue 3',
        logo: 'mdi:vuejs',
        category: 'frontend',
    },
    nuxt: {
        label: 'Nuxt',
        logo: 'mdi:nuxt',
        category: 'frontend',
        size: 'small',
    },
    typescript: {
        label: 'TypeScript',
        logo: 'mdi:language-typescript',
        category: 'frontend',
        size: 'large',
    },
    javascript: {
        label: 'JavaScript',
        category: 'frontend',
    },
    tailwind: {
        label: 'Tailwind CSS',
        logo: 'mdi:tailwind',
        category: 'frontend',
        size: 'small',
    },
    inertia: {
        label: 'Inertia.js',
        category: 'frontend',
    },
    react: {
        label: 'React',
        logo: 'mdi:react',
        category: 'frontend',
        size: 'small',
    },
    gsap: {
        label: 'GSAP',
        logo: 'simple-icons:gsap',
        category: 'frontend',
        size: 'small',
    },
    sql: {
        label: 'SQL',
        category: 'database',
    },
    tsql: {
        label: 'T-SQL',
        category: 'database',
    },
    postgresql: {
        label: 'PostgreSQL',
        logo: 'akar-icons:postgresql-fill',
        category: 'database',
        size: 'small',
    },
    node: {
        label: 'Node.js',
        logo: 'mdi:nodejs',
        category: 'backend',
        size: 'small',
    },
    strapi: {
        label: 'Strapi',
        category: 'backend',
    },
    sanity: {
        label: 'Sanity',
        category: 'tool',
    },
    pinia: {
        label: 'Pinia',
        category: 'frontend',
    },
    vuex: {
        label: 'Vuex',
        category: 'frontend',
    },
    webflow: {
        label: 'Webflow',
        category: 'tool',
    },
    drupal: {
        label: 'Drupal',
        category: 'backend',
    },
    html: {
        label: 'HTML',
        category: 'frontend',
    },
    css: {
        label: 'CSS',
        category: 'frontend',
    },
    csharp: {
        label: 'C#',
        category: 'backend',
    },
} as const satisfies Record<string, Technology>

export type TechnologyId = keyof typeof technologies
