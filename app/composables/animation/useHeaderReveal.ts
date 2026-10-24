import gsap from "gsap";

export type Options = {
	animationRootElement: Ref<HTMLElement | null>;
	headerContentElement: Ref<HTMLElement | null>;
	withScrollTrigger?: boolean;
	start?: string;

	sectionFromY?: string | number;
	sectionDurationSeconds?: number;
	headerFromY?: number;
	headerDurationSeconds?: number;

	ease?: string;
};

export type UseHeaderReveal = {
	playHeaderReveal: () => void;
	revertHeaderReveal: () => void;
};

export function useHeaderReveal(options: Options) {
	const timelineRef = shallowRef<gsap.core.Timeline | null>(null);

	let context: gsap.Context | null = null;

	function killTimeline() {
		timelineRef.value?.kill();

		timelineRef.value = null;
	}

	function setup() {
		const root = options.animationRootElement.value;

		const header = options.headerContentElement.value;

		if (!root || !header) return;

		context?.revert();

		context = gsap.context(() => {
			killTimeline();

			const withScroll = options.withScrollTrigger ?? true;

			const timeline = gsap.timeline({
				paused: !withScroll,
				scrollTrigger: withScroll
					? {
							trigger: root,
							start: options.start ?? "top 80%",
							toggleActions: "play none none none",
						}
					: undefined,
			});

			timeline
				.from(root, {
					y: options.sectionFromY ?? "30vh",
					duration: options.sectionDurationSeconds ?? 1,
					ease: options.ease ?? "circ.out",
				})
				.from(
					header,
					{
						opacity: 0,
						y: options.headerFromY ?? 200,
						duration: options.headerDurationSeconds ?? 1,
						ease: options.ease ?? "circ.out",
					},
					"<+0.2",
				);

			timelineRef.value = timeline;

			if (!withScroll) timeline.play(0);
		}, root);
	}

	function playHeaderReveal() {
		if (!timelineRef.value) setup();
	}

	function revertHeaderReveal() {
		killTimeline();

		context?.revert();

		context = null;
	}

	onMounted(async () => {
		if (!import.meta.client) return;

		await nextTick();

		setup();
	});

	onBeforeUnmount(() => {
		revertHeaderReveal();
	});

	return { playHeaderReveal, revertHeaderReveal };
}
