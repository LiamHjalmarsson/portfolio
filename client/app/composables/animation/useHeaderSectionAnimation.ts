import gsap from "gsap";

export type UseHeaderSectionAnimationOptions = {
	animationRootElement: Ref<HTMLElement | null>;
	headerContentElement: Ref<HTMLElement | null>;
	withScrollTrigger: boolean;
};

export type UseHeaderSectionAnimation = {
	playHeaderSection: () => void;
	revertHeaderSection: () => void;
};

export function useHeaderSectionAnimation(options: UseHeaderSectionAnimationOptions) {
	const timelineRef = shallowRef<gsap.core.Timeline | null>(null);

	let context: gsap.Context | null = null;

	function killTimeline() {
		timelineRef.value?.kill();

		timelineRef.value = null;
	}

	function setup() {
		const rootElement = options.animationRootElement.value;

		const header = options.headerContentElement.value;

		if (!rootElement || !header) return;

		context?.revert();

		context = gsap.context(() => {
			killTimeline();

			const timelime = gsap.timeline({
				paused: true,
				scrollTrigger: options.withScrollTrigger
					? {
							trigger: rootElement,
						}
					: undefined,
			});

			timelime
				.from(rootElement, {
					y: "30vh",
					duration: 1,
					ease: "circ.out",
				})
				.from(
					header,
					{
						opacity: 0,
						y: 300,
						duration: 1,
						ease: "circ.out",
					},
					"<+0.15",
				);

			timelineRef.value = timelime;
		}, rootElement);
	}

	function playHeaderSection() {
		if (!timelineRef.value) setup();

		if (!options.withScrollTrigger) timelineRef.value?.play(0);
	}

	function revertHeaderSection() {
		killTimeline();

		context?.revert();

		context = null;
	}

	onMounted(async () => {
		await nextTick();

		setup();

		playHeaderSection();
	});

	onBeforeUnmount(() => {
		revertHeaderSection();
	});

	return { playHeaderSection, revertHeaderSection };
}
