export interface SocialLink {
	name: string;
	href: string;
	icon: string;
};

export interface BackgroundItem {
	title: string;
	description: string;
};

export interface Background {
	title: string;
	company: string;
	description: string;
	items: BackgroundItem[];
};
