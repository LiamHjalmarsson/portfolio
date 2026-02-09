type SinglePageSeoInput = {
	title?: string;
	description?: string;
	ogImage?: string;
};

const SITE_NAME = "Liam Hjalmarsson";

const SITE_URL = "https://liamhjalmarsson.se";

export function useSinglePageSeo(input: SinglePageSeoInput = {}) {
	const title = input.title ?? SITE_NAME;

	const description =
		input.description ??
		"Liam Hjalmarsson fullstackutvecklare med fokus på moderna webblösningar, UX och prestanda.";

	const ogImage = input.ogImage ?? "/images/me.png";

	useSeoMeta({
		title,
		description,

		ogTitle: title,
		ogDescription: description,
		ogType: "website",
		ogUrl: SITE_URL,
		ogImage,

		twitterCard: "summary_large_image",
		twitterTitle: title,
		twitterDescription: description,
		twitterImage: ogImage,
	});
}
