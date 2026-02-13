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
		description: `I min tidigare roll på Timetjek arbetade jag med utveckling och vidareutveckling av ett webbaserat personalsystem som används dagligen för schemaläggning, löneunderlag och hantering av personaldata. Systemet hanterade känslig information och ställde höga krav på stabilitet, säkerhet, tillgänglighet och användarupplevelse.
		
		Jag ansvarade både för ny funktionalitet och löpande systemförvaltning. En central del av arbetet var moderniseringen av plattformen, där jag bidrog till migrering av legacy-frontend och backend-kod, omstrukturering av databastabeller samt förbättring av design och interaktion i användargränssnittet. Målet var att skapa en mer strukturerad, skalbar och långsiktigt hållbar arkitektur.`,
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
		title: "Junior Frontend Developer",
		company: "Nifitech",
		description: `På Nifitech arbetade jag i flera projekt där fokus låg på att sätta mig in i befintliga kodbaser och bidra till mer robusta och underhållsvänliga lösningar.
		
		Jag ansvarade för frontendutveckling i en applikation baserad på Laravel och Vue. Arbetet innefattade implementation och underhåll av Laravel-routes och controllers som stöd för frontendfunktionalitet samt integration av API:er för att hämta, bearbeta och presentera backenddata i användargränssnittet.
		
		En viktig del av uppdraget var att successivt förbättra kodbasens struktur och långsiktiga hållbarhet. Jag refaktorerade befintlig frontendkod för ökad läsbarhet och underhållbarhet, bidrog till övergången från Vue Options API till Composition API samt ersatte mixins med Pinia för en mer förutsägbar och strukturerad state-hantering. Jag implementerade även stöd för flerspråkighet (i18n) för att möjliggöra en mer flexibel och skalbar applikation.`,
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
		title: "Internship",
		company: "Sjöbergska",
		description: `Under min praktik på Sjöbergska deltog jag i ett pro bono-projekt där jag var involverad i hela processen från planering till leverans och hade huvudsakligt ansvar för design och utveckling av lösningen.
		
		Arbetet omfattade kunddialog genom möten och löpande kommunikation via mail samt framtagning av kravspecifikation och tidsestimat. Jag tog fram skisser, wireframes och prototyper som grund för den visuella och funktionella utformningen, och utvecklade den färdiga lösningen i Webflow.

		Utöver utvecklingsarbetet ansvarade jag för att ta fram användardokumentation samt uppdatera befintlig Drupal-dokumentation. Projektet krävde ett strukturerat arbetssätt och tydlig kommunikation för att säkerställa att leveransen motsvarade verksamhetens behov.`,
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
		title: "Kandidatexamen i Medieteknik",
		company: "Malmö universitet",
		description: `Genomförde min utbildning inom medieteknik med fokus på utveckling, databaser, UX/UI-design och digital produktutveckling. Utbildningen kombinerade teknisk implementation med projektledning, affärsförståelse och forskningsmetodik, vilket gav en helhetssyn på hur digitala produkter planeras, byggs och förvaltas.

		Under studietiden arbetade jag i flera större utvecklingsprojekt där hela processen genomfördes från idéarbete, wireframes och konceptutveckling till design, prototypframtagning, implementation, testning och slutlig presentation. Projekten genomfördes både individuellt och i team med tydlig rollfördelning, planering, dokumentation och uppföljning.`,
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
				description: "Grafiska användargränssnitt, interaktionsdesign, prototyparbete, wireframes",
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
					"Examensarbetet undersökte gamifications betydelse och påverkan på användarbeteende inom e-handel. Arbetet omfattade problemformulering, litteraturstudie och val av forskningsmetod. Datainsamlingen genomfördes dels genom kvalitativa intervjuer där deltagare fick navigera på en plattform och reflektera över sin upplevelse, dels genom kvantitativ insamling via formulär riktade mot en större målgrupp.",
			},
		],
	},
];
