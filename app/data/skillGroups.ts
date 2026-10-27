
export const skillGroups = {
    backend: {
        title: 'Backend',
        icon: 'mdi:server-outline',
    },
    frontend: {
        title: 'Frontend',
        icon: 'mdi:monitor',
    },
    databases: {
        title: 'Databaser',
        icon: 'mdi:database-outline',
    },
    systemDevelopment: {
        title: 'Systemutveckling',
        icon: 'mdi:code-braces',
    },
    cmsWeb: {
        title: 'CMS & webb',
        icon: 'mdi:web',
    },
    backendApi: {
        title: 'Backend & API',
        icon: 'mdi:api',
    },
    architecture: {
        title: 'Arkitektur & state management',
        icon: 'mdi:source-branch',
    },
    internationalization: {
        title: 'Internationalisering',
        icon: 'mdi:translate',
    },
    design: {
        title: 'Design',
        icon: 'mdi:palette-outline',
    },
    webDevelopment: {
        title: 'Webbutveckling',
        icon: 'mdi:web',
    },
    projectWork: {
        title: 'Projektarbete',
        icon: 'mdi:clipboard-check-outline',
    },
    documentation: {
        title: 'Dokumentation',
        icon: 'mdi:file-document-outline',
    },
    programming: {
        title: 'Programmering & webbutveckling',
        icon: 'mdi:code-tags',
    },
    backendDatabases: {
        title: 'Backend & databaser',
        icon: 'mdi:database-outline',
    },
    uiux: {
        title: 'UX & UI-design',
        icon: 'mdi:vector-square',
    },
    projectManagement: {
        title: 'Projektledning',
        icon: 'mdi:account-group-outline',
    },
    business: {
        title: 'Affär & strategi',
        icon: 'mdi:chart-line',
    },
    research: {
        title: 'Forskning & examensarbete',
        icon: 'mdi:school-outline',
    },
} as const satisfies Record<string, SkillGroup>

export type SkillGroupId = keyof typeof skillGroups
