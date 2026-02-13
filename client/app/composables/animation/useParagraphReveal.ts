import gsap from "gsap";

export type Options = {
	animationRootElement: Ref<HTMLElement | null>;
	textElement: Ref<HTMLElement | null>;
	withScrollTrigger?: boolean;
	start?: string;
	fromClipPath?: string;
	toClipPath?: string;
	FromY?: number;
	ease?: string;
};

export type UseParagraphReveal = {
	playParagraphReveal: () => void;
	revertParagraphReveal: () => void;
};

export function useParagraphReveal(options: Options): UseParagraphReveal {
	const timelineRef = shallowRef<gsap.core.Timeline | null>(null);

	let context: gsap.Context | null = null;

	function killTimeline() {
		timelineRef.value?.kill();

		timelineRef.value = null;
	}

	function setup() {
		const root = options.animationRootElement.value;

		const text = options.textElement.value;

		if (!root || !text) return;

		context?.revert();

		context = gsap.context(() => {
			killTimeline();

			const withScroll = options.withScrollTrigger ?? true;

			const fromClip = options.fromClipPath ?? "inset(0% 0% 100% 0%)";

			const toClip = options.toClipPath ?? "inset(0% 0% 0% 0%)";

			gsap.set(root, { clipPath: fromClip });

			const timeline = gsap.timeline({
				paused: !withScroll,
				scrollTrigger: withScroll
					? {
							trigger: root,
							start: options.start ?? "top 85%",
							toggleActions: "play none none none",
						}
					: undefined,
			});

			timeline
				.from(root, {
					y: 0,
					duration: 0.9,
					ease: "power3.out",
				})
				.to(
					root,
					{
						clipPath: toClip,
						duration: 0.9,
						ease: options.ease ?? "power3.out",
					},
					"<",
				)
				.from(
					text,
					{
						opacity: 0,
						y: options.FromY ?? 18,
						duration: 0.9,
						ease: options.ease ?? "power3.out",
						clearProps: "transform",
					},
					"<+0.1",
				);

			timelineRef.value = timeline;

			if (!withScroll) timeline.play(0);
		}, root);
	}

	function playParagraphReveal() {
		if (!timelineRef.value) setup();
	}

	function revertParagraphReveal() {
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
		revertParagraphReveal();
	});

	return { playParagraphReveal, revertParagraphReveal };
}
