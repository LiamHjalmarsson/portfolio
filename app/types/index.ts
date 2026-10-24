export interface SocialLink {
	name: string;
	href: string;
	icon: string;
};


export type BackgroundType = 'work' | 'education'

export interface BackgroundSkillGroup {
    title: string
    tags: string[]
}

export interface Background {
    id: string
    type: BackgroundType
    title: string
    organization: string
    period?: string
    description: string
    highlights: string[]
    skills: BackgroundSkillGroup[]
}
