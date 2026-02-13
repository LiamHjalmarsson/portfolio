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
	const timelineRef = shallowRef<gsap.core.Timeline | null>(null);

	let context: gsap.Context | null = null;

	onMounted(async () => {
		await nextTick();

		const topLine = options.topLineElement.value;

		const centerLine = options.centerLineElement.value;

		const bottomLine = options.bottomLineElement.value;

		if (!topLine || !centerLine || !bottomLine) return;

		context?.revert();

		context = null;

		context = gsap.context(() => {
			timelineRef.value = gsap
				.timeline({ paused: true })
				.to(topLine, {
					rotate: 45,
					y: 6,
					duration: 0.5,
					ease: "power2.inOut",
				})
				.to(
					centerLine,
					{
						autoAlpha: 0,
						duration: 0.5,
						ease: "power2.inOut",
					},
					"<",
				)
				.to(
					bottomLine,
					{
						rotate: -45,
						y: -6,
						duration: 0.5,
						ease: "power2.inOut",
					},
					"<",
				);
		});
	});

	onBeforeUnmount(() => {
		context?.revert();

		context = null;

		timelineRef.value = null;
	});

	return {
		play: () => timelineRef.value?.play(),
		reverse: () => timelineRef.value?.reverse(),
	};
}
