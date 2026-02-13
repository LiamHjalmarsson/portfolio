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
		title: "Fullstack Utvecklare",
		company: "Timetjek",
		description: `Arbetade med utveckling och vidareutveckling av ett webbaserat personalsystem för schemaläggning, löneunderlag och personaldata. Ansvarade för ny funktionalitet, systemförvaltning och modernisering av plattformen genom migrering av legacy-kod, databasanpassningar och förbättrad struktur.`,
		items: [
			{
				title: "Backend",
				description: "Laravel, PHP, REST API",
			},
			{
				title: "Frontend",
				description: "Vue, JavaScript/TypeScript, komponentbaserad UI",
			},
			{
				title: "Database",
				description: "Databastabeller och struktur",
			},
			{
				title: "Systemarbete",
				description: "Legacy-migrering, ny funktionalitet, refaktorering",
			},
		],
	},
	{
		title: "Junior Frontend Utvecklare",
		company: "Nifitech",
		description: `Arbetade med frontendutveckling i Laravel- och Vue-baserade projekt. Integrerade API:er, förbättrade kodstruktur och bidrog till övergången till Composition API och Pinia samt implementerade flerspråkighet.`,
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
				title: "State & i18n",
				description: "Pinia, flerspråkighet",
			},
		],
	},
	{
		title: "Praktikant inom Projekt & Utveckling",
		company: "Sjöbergska",
		description: `Deltog i ett pro bono-projekt från planering till leverans med ansvar för design och utveckling. Arbetade med kunddialog, kravspecifikation, prototyper och implementation i Webflow.`,
		items: [
			{
				title: "Design",
				description: "Wireframes, prototyper och UI-struktur",
			},
			{
				title: "Development",
				description: "Webflow-implementation",
			},
			{
				title: "Projektarbete",
				description: "Kravspecifikation, tidsestimat och kunddialog",
			},
			{
				title: "Dokumentation",
				description: "Användardokumentation + Drupal-uppdateringar",
			},
		],
	},
	{
		title: "Kandidatexamen i Medieteknik",
		company: "Malmö universitet",
		description: `Universitetsutbildning inom utveckling, databaser och digital produktutveckling. Arbetade genom hela utvecklingsprocessen från idé och design till implementation, testning och presentation, både individuellt och i team.`,
		items: [
			{
				title: "Utveckling",
				description: "HTML, CSS, JavaScript, C#, databaskopplingar och databasbaserad publicering",
			},
			{
				title: "Backend & databaser",
				description: "Relationsdatabaser, Php, SQL och API-integration",
			},
			{
				title: "UX & Ui Design",
				description: "Grafiska användargränssnitt, interaktionsdesign, prototyparbete och wireframes",
			},
			{
				title: "Projektledning",
				description: "Kravspecifikation, riskanalys, processkartläggning och teamarbete",
			},

			{
				title: "Affär & strategi",
				description: "Affärsplanering, digital marknadsföring och analys av affärsmodeller",
			},
			{
				title: "Forskning & examensarbete",
				description:
					"Undersökte gamifications betydelse och påverkan på användarbeteende inom e-handel. Problemformulering, litteraturstudie och forskningsmetod. Datainsamlingen, kvalitativa intervjuer, kvantitativ insamling via formulär",
			},
		],
	},
];
