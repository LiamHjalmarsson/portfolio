export type TechStackLogoName =
	| "nuxt"
	| "vue"
	| "react"
	| "typescript"
	| "laravel"
	| "node"
	| "figma"
	| "gsap"
	| "tailwind"
	| "postgresql";

export type TechTileSize = "large" | "small";

export type TechTileItem = {
	key: string;
	label: string;
	size: TechTileSize;
	logo: TechStackLogoName;
};

export const stackItems: TechTileItem[] = [
	{
		key: "vue",
		label: "Vue",
		size: "large",
		logo: "vue",
	},
	{
		key: "nuxt",
		label: "Nuxt.js",
		size: "large",
		logo: "nuxt",
	},
	{
		key: "typescript",
		label: "TypeScript",
		size: "large",
		logo: "typescript",
	},
	{
		key: "gsap",
		label: "GSAP",
		size: "small",
		logo: "gsap",
	},
	{
		key: "laravel",
		label: "Laravel",
		size: "small",
		logo: "laravel",
	},
	{
		key: "tailwind",
		label: "Tailwind",
		size: "small",
		logo: "tailwind",
	},
	{
		key: "postgreSQL",
		label: "PostgreSQL",
		size: "small",
		logo: "postgresql",
	},
	{
		key: "node",
		label: "Node",
		size: "small",
		logo: "node",
	},
	{
		key: "figma",
		label: "Figma",
		size: "small",
		logo: "figma",
	},
];
