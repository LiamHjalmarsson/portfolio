import gsap from "gsap";

export type Options = {
	animationRootElement: Ref<HTMLElement | null>;
	lineElements: Ref<HTMLElement[]>;
	withScrollTrigger?: boolean;
	start?: string;
	durationSeconds?: number;
	staggerSeconds?: number;
	ease?: string;

	withClip?: boolean;
	fromClipPath?: string;
	toClipPath?: string;
	clipDurationSeconds?: number;
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

			const withScroll = options.withScrollTrigger ?? true;

			const withClip = options.withClip ?? true;

			const fromClip = options.fromClipPath ?? "inset(0% 0% 100% 0%)";

			const toClip = options.toClipPath ?? "inset(0% 0% 0% 0%)";

			const clipDuration = options.clipDurationSeconds ?? 0.8;

			gsap.set(root, { overflow: "hidden" });

			if (withClip) gsap.set(root, { clipPath: fromClip });

			gsap.set(lines, {
				opacity: 0,
				y: 24,
			});

			const timeline = gsap.timeline({
				paused: !withScroll,
				scrollTrigger: withScroll
					? {
							trigger: root,
							start: options.start ?? "top 115%",
							toggleActions: "play none none none",
						}
					: undefined,
			});

			if (withClip) {
				timeline.to(root, {
					clipPath: toClip,
					duration: clipDuration,
					ease: options.ease ?? "power3.out",
				});
			}

			timeline.to(
				lines,
				{
					opacity: 1,
					y: 0,
					duration: options.durationSeconds ?? 1,
					stagger: options.staggerSeconds ?? 0.3,
					ease: options.ease ?? "power3.out",
					clearProps: "transform",
				},
				withClip ? "<+0.1" : 0,
			);

			timelineRef.value = timeline;

			if (!withScroll) timeline.play(0);
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
