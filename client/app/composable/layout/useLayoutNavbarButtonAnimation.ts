import gsap from "gsap";

export type NavbarToggleButtonAnimation = {
	play: () => void;
	reverse: () => void;
};

type UseLayoutNavbarButtonAnimationOptions = {
	topLineElement: Ref<HTMLElement | null>;

	centerLineElement: Ref<HTMLElement | null>;

	bottomLineElement: Ref<HTMLElement | null>;
};

export function useLayoutNavbarButtonAnimation(options: UseLayoutNavbarButtonAnimationOptions) {
	const iconTimelineRef = shallowRef<gsap.core.Timeline | null>(null);

	let gsapContext: gsap.Context | null = null;

	onMounted(() => {
		if (!import.meta.client) return;

		const topLine = options.topLineElement.value;

		const centerLine = options.centerLineElement.value;

		const bottomLine = options.bottomLineElement.value;

		if (!topLine || !centerLine || !bottomLine) return;

		gsapContext = gsap.context(() => {
			iconTimelineRef.value = gsap
				.timeline({ paused: true })
				.to(topLine, {
					rotate: 45,
					y: 6,
					duration: 0.25,
					ease: "power2.inOut",
				})
				.to(
					centerLine,
					{
						autoAlpha: 0,
						duration: 0.12,
						ease: "power2.inOut",
					},
					"<",
				)
				.to(
					bottomLine,
					{
						rotate: -45,
						y: -6,
						duration: 0.25,
						ease: "power2.inOut",
					},
					"<",
				);
		});
	});

	onBeforeUnmount(() => {
		gsapContext?.revert();

		gsapContext = null;

		iconTimelineRef.value = null;
	});

	return {
		play: () => iconTimelineRef.value?.play(),
		reverse: () => iconTimelineRef.value?.reverse(),
	};
}
