    export const skills = {
        api: {
            title: 'API-utveckling',
            technologies: ['php', 'laravel'],
        },
        integrations: {
            title: 'Systemintegrationer',
        },
        businessLogic: {
            title: 'Affärslogik',
        },
        databases: {
            title: 'Databasstruktur',
            technologies: ['sql', 'tsql', 'postgresql'],
        },
        storedProcedures: {
            title: 'Stored procedures',
            technologies: ['tsql'],
        },
        legacy: {
            title: 'Legacy & modernisering',
        },
        upgrades: {
            title: 'Versionsuppgraderingar',
        },
        refactoring: {
            title: 'Refaktorering',
        },
        debugging: {
            title: 'Felsökning',
        },
        maintenance: {
            title: 'Systemförvaltning',
        },
        cms: {
            title: 'CMS-utveckling',
        },
        accessibility: {
            title: 'Tillgänglighet & WCAG',
        },
        seo: {
            title: 'SEO',
        },
        performance: {
            title: 'Webbprestanda',
        },
        responsive: {
            title: 'Responsiv design',
        },
        components: {
            title: 'Komponentbaserad utveckling',
        },
        stateManagement: {
            title: 'State management',
            technologies: ['pinia', 'vuex'],
        },
        internationalization: {
            title: 'Internationalisering',
        },
        uiux: {
            title: 'UI/UX-design',
        },
        projectManagement: {
            title: 'Projektarbete',
        },
        documentation: {
            title: 'Dokumentation',
        },
        research: {
            title: 'Forskning & analys',
        },
        marketing: {
            title: 'Digital marknadsföring',
        },
    } as const satisfies Record<string, Skill>

    export type SkillId = keyof typeof skills
