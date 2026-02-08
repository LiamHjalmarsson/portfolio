import gsap from "gsap";

export type NavbarMenuAnimation = {
	play: () => void;
	reverse: () => void;
};

type UseLayoutNavbarMenuAnimationOptions = {
	menuRootElement: Ref<HTMLElement | null>;

	menuLinkElements: Ref<HTMLElement[]>;

	contactSectionElement: Ref<HTMLElement | null>;
};

export function useLayoutNavbarMenuAnimation(options: UseLayoutNavbarMenuAnimationOptions) {
	const menuTimelineRef = shallowRef<gsap.core.Timeline | null>(null);

	let gsapContext: gsap.Context | null = null;

	function initializeAnimation(): void {
		const menuRoot = options.menuRootElement.value;

		const contactSection = options.contactSectionElement.value;

		const menuLinks = options.menuLinkElements.value;

		if (!menuRoot || !contactSection || menuLinks.length === 0) return;

		gsapContext = gsap.context(() => {
			gsap.set(menuRoot, { xPercent: 100 });

			gsap.set(menuLinks, { autoAlpha: 0, x: -200 });

			gsap.set(contactSection, { autoAlpha: 0, y: 200, x: 0 });

			menuTimelineRef.value = gsap
				.timeline({ paused: true })
				.to(menuRoot, { xPercent: 0, duration: 1, ease: "power3.out" })
				.to(
					menuLinks,
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
					contactSection,
					{
						autoAlpha: 1,
						y: 0,
						duration: 0.5,
						ease: "power2.out",
					},
					"<+0.6",
				);
		}, menuRoot);
	}

	initializeAnimation();

	onBeforeUnmount(() => {
		gsapContext?.revert();

		gsapContext = null;

		menuTimelineRef.value = null;
	});

	return {
		play: () => menuTimelineRef.value?.play(),
		reverse: () => menuTimelineRef.value?.reverse(),
	};
}
