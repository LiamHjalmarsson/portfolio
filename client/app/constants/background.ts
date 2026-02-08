export type BackgroundItem = {
	title: string;
	description: string;
};

export type Background = {
	title: string;
	company: string;
	description: string;
	items: BackgroundItem[];
};

export const backgroundData: Background[] = [
	{
		title: "Fullstack Developer",
		company: "Timetjek",
		description:
			"Arbetade med utveckling och vidareutveckling av ett webbaserat personalsystem som används dagligen för schemaläggning, löneunderlag och personaldata. Fokus låg på stabilitet, säkerhet och långsiktig förvaltning, samt modernisering av systemet genom migration från legacy-lösningar till en mer strukturerad och underhållbar arkitektur.",
		items: [
			{
				title: "Backend",
				description: "Laravel, PHP, REST API, systemintegrationer",
			},
			{
				title: "Frontend",
				description: "Vue, JavaScript/TypeScript, komponentbaserad UI",
			},
			{
				title: "Database",
				description: "PostgreSQL / MySQL, databastabeller och struktur",
			},
			{
				title: "Systemarbete",
				description: "Legacy-migrering, ny funktionalitet, refaktorering",
			},
		],
	},
	{
		title: "Junior Frontend Developer",
		company: "Nifitech",
		description:
			"Arbetade med frontendutveckling i Laravel- och Vue-baserade applikationer. Implementerade API-integrationer, förbättrade befintlig kodstruktur och bidrog till bättre läsbarhet och underhållbarhet. Deltog aktivt i teamarbete, code reviews och vidareutveckling av användargränssnitt.",
		items: [
			{
				title: "Frontend",
				description: "Vue, Nuxt, Tailwind CSS, UI-utveckling",
			},
			{
				title: "Backend",
				description: "Laravel routes & controllers",
			},
			{
				title: "Arkitektur",
				description: "Refaktorering, Options API → Composition API",
			},
			{
				title: "State & i18n",
				description: "Pinia, flerspråkighet",
			},
		],
	},
	{
		title: "Internship",
		company: "Sjöbergska",
		description:
			"Deltog i ett pro bono-projekt där jag ansvarade för design och utveckling av en webbplats från kravspecifikation till färdig leverans. Arbetade med wireframes, prototyper och implementation i Webflow samt ansvarade för kommunikation med kund och dokumentation.",
		items: [
			{
				title: "Design",
				description: "Wireframes, prototyper, UI-struktur",
			},
			{
				title: "Development",
				description: "Webflow-implementation",
			},
			{
				title: "Projektarbete",
				description: "Kravspecifikation, tidsestimat, kunddialog",
			},
			{
				title: "Dokumentation",
				description: "Användardokumentation + Drupal-uppdateringar",
			},
		],
	},
	{
		title: "Bachelor's Degree in Media Technology",
		company: "Malmö University",
		description:
			"Studerade en bred utbildning inom media och teknik, med fokus på utveckling, digitala medier, projekt ledning. Genomförde projekt inom frontend- och backendutveckling, samt fördjupade mig i design och tekniska lösningar för digitala produkter.",
		items: [
			{
				title: "Design",
				description: "Wireframes, prototyper, UI-struktur",
			},
			{
				title: "Development",
				description: "Webflow-implementation",
			},
			{
				title: "Projektarbete",
				description: "Kravspecifikation, tidsestimat, kunddialog",
			},
			{
				title: "Dokumentation",
				description: "Användardokumentation + Drupal-uppdateringar",
			},
		],
	},
];
