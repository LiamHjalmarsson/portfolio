type SeoInput = {
	title?: string;
	description?: string;
	ogImage?: string;
	noIndex?: boolean;
};

const DEFAULT_SITE_NAME = "Liam Hjalmarsson";

const DEFAULT_DESCRIPTION =
	"Liam Hjalmarsson fullstackutvecklare med fokus på moderna webblösningar, UX och prestanda.";

const DEFAULT_IMAGE = "/images/me.png";

export function useSeo(input: SeoInput = {}): void {
	const route = useRoute();

	const runtimeConfig = useRuntimeConfig();

	const siteUrl = runtimeConfig.public.siteUrl;

	const title = input.title ?? DEFAULT_SITE_NAME;

	const description = input.description ?? DEFAULT_DESCRIPTION;

	const ogImage = input.ogImage ?? DEFAULT_IMAGE;

	const canonicalUrl = `${siteUrl}${route.path}`;

	useSeoMeta({
		title,
		description,

		ogTitle: title,
		ogDescription: description,
		ogType: "website",
		ogUrl: canonicalUrl,
		ogImage,

		twitterCard: "summary_large_image",
		twitterTitle: title,
		twitterDescription: description,
		twitterImage: ogImage,
	});

	useHead({
		link: [
			{
				rel: "canonical",
				href: canonicalUrl,
			},
		],
	});
}
