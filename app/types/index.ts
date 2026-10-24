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

export interface Project  {
	id: string;
	title: string;
	imageSrc: string;
	imageAlt: string;
	description?: string;
	tech: string[];
	href: string;
};

export interface Service {
    title: string
    description: string
}

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
