import gsap from "gsap";

export type UseImageRevealOptions = {
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

export function useImageReveal(options: UseImageRevealOptions) {
	const timelineRef = shallowRef<gsap.core.Timeline | null>(null);

	let context: gsap.Context | null = null;

	const defaults = {
		withScrollTrigger: options.withScrollTrigger ?? true,
		start: options.start ?? "top 85%",
		durationSeconds: options.durationSeconds ?? 2,
		ease: options.ease ?? "power4.out",
		fromClipPath: options.fromClipPath ?? "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
		toClipPath: options.toClipPath ?? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
	};

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

			gsap.set(target, { clipPath: defaults.fromClipPath });

			const timeline = gsap.timeline({
				paused: true,
				scrollTrigger: defaults.withScrollTrigger
					? {
							trigger: target,
							start: defaults.start,
							toggleActions: "play none none none",
						}
					: undefined,
			});

			timeline.to(target, {
				clipPath: defaults.toClipPath,
				duration: defaults.durationSeconds,
				ease: defaults.ease,
			});

			timelineRef.value = timeline;

			if (!defaults.withScrollTrigger) timeline.play(0);
		}, root);
	}

	function playImageReveal() {
		if (!timelineRef.value) setup();

		if (!defaults.withScrollTrigger) timelineRef.value?.play(0);
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
