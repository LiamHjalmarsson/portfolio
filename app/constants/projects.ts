type ProjectItem = {
	id: string;
	title: string;
	imageSrc: string;
	imageAlt: string;
	description?: string;
	tech: string[];
	href: string;
};

export const projectsData: ProjectItem[] = [
	{
		id: "altmedia",
		title: "AltMedia",
		imageSrc: "/images/altmedia.png",
		imageAlt: "AltMedia project preview",
		tech: ["Nuxt", "Strapi", "TypeScript", "Tailwind"],
		href: "https://alt-media-five.vercel.app/",
	},
	{
		id: "portfolio",
		title: "Portfolio",
		imageSrc: "/images/oldportfolio.png",
		imageAlt: "Portfolio project preview",
		tech: ["React", "Sanity", "Tailwind"],
		href: "https://oldportfolio.liamhjalmarsson.se/",
	},
];
