import gsap from "gsap";

export type NavbarMenuAnimation = {
	play: () => void;
	reverse: () => void;
};

type Options = {
	menuRootElement: Ref<HTMLElement | null>;
	menuLinkElements: Ref<HTMLElement[]>;
	contactSectionElement: Ref<HTMLElement | null>;
};

export function useLayoutNavbarMenuAnimation(options: Options) {
	const timelineRef = shallowRef<gsap.core.Timeline | null>(null);

	let context: gsap.Context | null = null;

	onMounted(async () => {
		await nextTick();

		const root = options.menuRootElement.value;

		const links = options.menuLinkElements.value;

		const contact = options.contactSectionElement.value;

		if (!root || !contact || links.length === 0) return;

		context?.revert();

		context = null;

		context = gsap.context(() => {
			gsap.set(root, {
				xPercent: 100,
			});

			gsap.set(links, {
				autoAlpha: 0,
				x: -200,
			});
			gsap.set(contact, {
				autoAlpha: 0,
				y: 200,
			});

			timelineRef.value = gsap
				.timeline({ paused: true })
				.to(root, {
					xPercent: 0,
					duration: 1,
					ease: "power3.out",
				})
				.to(
					links,
					{
						autoAlpha: 1,
						x: 0,
						stagger: 0.25,
						duration: 0.5,
						ease: "power2.out",
					},
					"<+0.1",
				)
				.to(
					contact,
					{
						autoAlpha: 1,
						y: 0,
						duration: 0.5,
						ease: "power2.out",
					},
					"<+0.6",
				);
		}, root);
	});

	onBeforeUnmount(() => {
		context?.revert();

		context = null;

		timelineRef.value = null;
	});

	return {
		play: () => timelineRef.value?.play(0),
		reverse: () => timelineRef.value?.reverse(),
	};
}
