import gsap from "gsap";

export type NavbarToggleButtonAnimation = {
	play: () => void;
	reverse: () => void;
};

type Options = {
	topLineElement: Ref<HTMLElement | null>;

	centerLineElement: Ref<HTMLElement | null>;

	bottomLineElement: Ref<HTMLElement | null>;
};

export function useLayoutNavbarButtonAnimation(options: Options) {
	const timelineRef = shallowRef<gsap.core.Timeline | null>(null);

	let context: gsap.Context | null = null;

	onMounted(async () => {
		await nextTick();

		const topLine = options.topLineElement.value;

		const centerLine = options.centerLineElement.value;

		const bottomLine = options.bottomLineElement.value;

		if (!topLine || !centerLine || !bottomLine) return;

		context?.revert();

		context = gsap.context(() => {
			timelineRef.value?.kill();

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
		}, topLine);
	});

	onBeforeUnmount(() => {
		timelineRef.value?.kill();

		timelineRef.value = null;

		context?.revert();

		context = null;
	});

	return {
		play: () => timelineRef.value?.play(),
		reverse: () => timelineRef.value?.reverse(),
	};
}
