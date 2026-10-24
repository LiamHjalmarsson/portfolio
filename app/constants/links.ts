type Link = {
	name: string;
	to: string;
	sectionId: string;
};

export const links: Link[] = [
	{
		name: "Hem",
		to: "/",
		sectionId: "home",
	},
	{
		name: "Tech",
		to: "/",
		sectionId: "tech",
	},
	{
		name: "Backgrund",
		to: "/background",
		sectionId: "background",
	},
	{
		name: "Om mig",
		to: "/about",
		sectionId: "about",
	},
	{
		name: "Projekt",
		to: "/service",
		sectionId: "projects",
	},
	{
		name: "Kontakt",
		to: "/contact",
		sectionId: "contact",
	},
];
