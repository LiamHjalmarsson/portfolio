import gsap from "gsap";

export type Options = {
	rootEl: Ref<HTMLElement | null>;
	targetEl: Ref<HTMLElement | null>;

	withScrollTrigger?: boolean;
	start?: string;
	durationSeconds?: number;
	ease?: string;

	fromClipPath?: string;
	toClipPath?: string;
};

export type UseImageRevealReturn = {
	playImageReveal: () => void;
	revertImageReveal: () => void;
};

export function useImageReveal(options: Options) {
	const timelineRef = shallowRef<gsap.core.Timeline | null>(null);

	let context: gsap.Context | null = null;

	function killTimeline() {
		timelineRef.value?.kill();

		timelineRef.value = null;
	}

	function setup() {
		const root = options.rootEl.value;

		const target = options.targetEl.value;

		if (!root || !target) return;

		context?.revert();

		context = gsap.context(() => {
			killTimeline();

			const withScroll = options.withScrollTrigger ?? true;

			const fromClip = options.fromClipPath ?? "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)";

			const toClip = options.toClipPath ?? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

			gsap.set(target, { clipPath: fromClip });

			const timeline = gsap.timeline({
				paused: !withScroll,
				scrollTrigger: withScroll
					? {
							trigger: root,
							start: options.start ?? "top 85%",
							toggleActions: "play none none none",
							invalidateOnRefresh: true,
						}
					: undefined,
			});

			timeline.to(target, {
				clipPath: toClip,
				duration: options.durationSeconds ?? 2,
				ease: options.ease ?? "power4.out",
			});

			timelineRef.value = timeline;

			if (!withScroll) timeline.play(0);
		}, root);
	}

	function playImageReveal() {
		if (!timelineRef.value) setup();
	}

	function revertImageReveal() {
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
		revertImageReveal();
	});

	return { playImageReveal, revertImageReveal };
}
