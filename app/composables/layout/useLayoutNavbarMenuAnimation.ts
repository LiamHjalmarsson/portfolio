import gsap from "gsap";

export type NavbarMenuAnimation = {
	play: () => void;
	reverse: () => void;
};

type Options = {
	menuRef: Ref<HTMLElement | null>;
	menuLinks: Ref<HTMLElement[]>;
	contactRef: Ref<HTMLElement | null>;
};

export function useLayoutNavbarMenuAnimation(options: Options) {
	const timelineRef = shallowRef<gsap.core.Timeline | null>(null);

	let context: gsap.Context | null = null;

	onMounted(async () => {
		await nextTick();

		const menu = options.menuRef.value;

		const links = options.menuLinks.value;

		const contact = options.contactRef.value;

		if (!menu || !contact || links.length === 0) return;

		context?.revert();

		context = gsap.context(() => {
			gsap.set(menu, {
				xPercent: 100,
				visibility: "hidden",
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
				.timeline({
					paused: true,
					onStart: () => {
						gsap.set(menu, {
							visibility: "visible"
						});
					},
				})
				.to(menu, {
					xPercent: 0,
					duration: 0.9,
					ease: "power3.out",
				})
				.to(
					links,
					{
						autoAlpha: 1,
						x: 0,
						stagger: 0.2,
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
					"<+0.4",
				);
		}, menu);
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
