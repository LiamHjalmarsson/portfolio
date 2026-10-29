import type { SkillGroupId } from "~/data/skillGroups";
import type { SkillId } from "~/data/skills";
import type { TechnologyId } from "~/data/technologies";
import type { Collections } from '@nuxt/content'

export interface SocialLink {
	name: string;
	href: string;
	icon: string;
};

export interface Link {
	name: string;
	to: string;
	sectionId: string;
};

export type Size = "large" | "small";

export type ButtonVariant = 'primary' | 'outline' | 'ghost'

export type ButtonType = 'button' | 'submit' | 'reset'

export interface Stack {
	key: string;
	label: string;
	size: Size;
	logo: string;
};

export interface Seo {
    title?: string
    description?: string
    ogImage?: string
    noIndex?: boolean
}

export interface Button {
    label: string
    variant?: ButtonVariant
    type?: ButtonType
    to?: string
}

export type Category = 'frontend' | 'backend' | 'database' | 'tool'

export type BackgroundType = 'work' | 'education'

export interface Technology {
    id?: number
    label: string
    logo?: string
    category: Category
    size?: Size
    color?: string
}

export interface Skill {
    title: string
    description?: string
    technologies?: Technology[]
}

export interface SkillGroup {
    title: string
    icon: string
}

export interface BackgroundSkill {
    group: SkillGroupId
    technologies?: TechnologyId[]
    skills: SkillId[]
}

export interface Background {
    id: string
    title: string
    code: string
    company: string
    type: BackgroundType
    description: string
    skills: BackgroundSkill[]
}

export type Project = Collections['projects']

export interface Service {
    title: string
    description: string
}
