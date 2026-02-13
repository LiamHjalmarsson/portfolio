import gsap from "gsap";

export type Options = {
	animationRootElement: Ref<HTMLElement | null>;
	lineElements: Ref<HTMLElement[]>;
	withScrollTrigger?: boolean;
	start?: string;
	durationSeconds?: number;
	staggerSeconds?: number;
	ease?: string;
};

export type UseTextLinesReveal = {
	playTextLines: () => void;
	revertTextLines: () => void;
};

export function useTextLinesReveal(options: Options) {
	const timelineRef = shallowRef<gsap.core.Timeline | null>(null);

	let context: gsap.Context | null = null;

	function killTimeline() {
		timelineRef.value?.kill();

		timelineRef.value = null;
	}

	function setup() {
		const root = options.animationRootElement.value;

		const lines = options.lineElements.value;

		if (!root || lines.length === 0) return;

		context?.revert();

		context = gsap.context(() => {
			killTimeline();

			gsap.set(lines, {
				opacity: 0,
				y: 24,
			});

			const timeline = gsap.timeline({
				paused: true,
				scrollTrigger: options.withScrollTrigger
					? {
							trigger: root,
							start: options.start ?? "top 115%",
						}
					: undefined,
			});

			timeline.to(lines, {
				opacity: 1,
				y: 0,
				duration: options.durationSeconds ?? 1,
				stagger: options.staggerSeconds ?? 0.3,
				ease: options.ease ?? "power3.out",
				clearProps: "transform",
			});

			timelineRef.value = timeline;

			if (!options.withScrollTrigger) timeline.play(0);
		}, root);
	}

	function playTextLines() {
		if (!timelineRef.value) setup();
	}

	function revertTextLines() {
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
		revertTextLines();
	});

	return { playTextLines, revertTextLines };
}
