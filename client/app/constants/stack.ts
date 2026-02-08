export type TechTileSize = "large" | "small";

export type TechTileItem = {
	key: string;
	label: string;
	size: TechTileSize;
	logo: string;
};

export const stackItems: TechTileItem[] = [
	{
		key: "vue",
		label: "Vue",
		size: "large",
		logo: "mdi:vuejs",
	},
	{
		key: "nuxt",
		label: "Nuxt.js",
		size: "large",
		logo: "mdi:nuxt",
	},
	{
		key: "typescript",
		label: "TypeScript",
		size: "large",
		logo: "mdi:language-typescript",
	},
	{
		key: "gsap",
		label: "GSAP",
		size: "small",
		logo: "simple-icons:gsap",
	},
	{
		key: "laravel",
		label: "Laravel",
		size: "small",
		logo: "mdi:laravel",
	},
	{
		key: "tailwind",
		label: "Tailwind",
		size: "small",
		logo: "mdi:tailwind",
	},
	{
		key: "postgreSQL",
		label: "PostgreSQL",
		size: "small",
		logo: "akar-icons:postgresql-fill",
	},
	{
		key: "node",
		label: "Node",
		size: "small",
		logo: "mdi:nodejs",
	},
	{
		key: "react",
		label: "React",
		size: "small",
		logo: "mdi:react",
	},
];
