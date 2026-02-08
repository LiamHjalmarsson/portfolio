import gsap from "gsap";

export type UseFadingRotatingImagesOptions = {
	rotatingImageSources: string[];
	currentImageWrapperElement: Ref<HTMLElement | null>;
	nextImageWrapperElement: Ref<HTMLElement | null>;
	swapIntervalMs: number;
	transitionDurationSeconds: number;
};

export type UseFadingRotatingImages = {
	currentImageIndex: Ref<number>;
	nextImageIndex: Ref<number>;
	startImageRotation: () => void;
	stopImageRotation: () => void;
};

export function useFadingRotatingImages(options: UseFadingRotatingImagesOptions) {
	const currentImageIndex = ref(0);

	const nextImageIndex = ref(Math.min(1, Math.max(0, options.rotatingImageSources.length - 1)));

	const swapTimeoutId = ref<number | null>(null);

	let transitionTimeline: gsap.core.Timeline | null = null;

	let gsapContext: gsap.Context | null = null;

	function clearScheduledSwap() {
		if (swapTimeoutId.value === null) return;

		window.clearTimeout(swapTimeoutId.value);

		swapTimeoutId.value = null;
	}

	function scheduleNextSwap() {
		clearScheduledSwap();

		swapTimeoutId.value = window.setTimeout(() => {
			void swapImage();
		}, options.swapIntervalMs);
	}

	function prepareWrapperOpacity(): void {
		const currentWrapper = options.currentImageWrapperElement.value;

		const nextWrapper = options.nextImageWrapperElement.value;

		if (!currentWrapper || !nextWrapper) return;

		gsap.set(currentWrapper, { opacity: 1 });

		gsap.set(nextWrapper, { opacity: 0 });
	}

	async function swapImage(): Promise<void> {
		const currentWrapper = options.currentImageWrapperElement.value;

		const nextWrapper = options.nextImageWrapperElement.value;

		if (!currentWrapper || !nextWrapper) {
			scheduleNextSwap();

			return;
		}

		transitionTimeline?.kill();

		transitionTimeline = null;

		transitionTimeline = gsap.timeline({
			onComplete: () => {
				currentImageIndex.value = nextImageIndex.value;

				nextImageIndex.value = (nextImageIndex.value + 1) % options.rotatingImageSources.length;

				prepareWrapperOpacity();

				scheduleNextSwap();
			},
		});

		transitionTimeline
			.to(currentWrapper, {
				opacity: 0,
				duration: options.transitionDurationSeconds,
				ease: "power2.out",
			})
			.to(
				nextWrapper,
				{
					opacity: 1,
					duration: options.transitionDurationSeconds,
					ease: "power2.out",
				},
				"<",
			);
	}

	function startImageRotation(): void {
		if (!import.meta.client) return;

		gsapContext?.revert();

		gsapContext = null;

		gsapContext = gsap.context(() => {
			prepareWrapperOpacity();

			scheduleNextSwap();
		});
	}

	function stopImageRotation(): void {
		if (!import.meta.client) return;

		clearScheduledSwap();

		transitionTimeline?.kill();

		transitionTimeline = null;

		gsapContext?.revert();

		gsapContext = null;
	}

	return {
		currentImageIndex,
		nextImageIndex,
		startImageRotation,
		stopImageRotation,
	};
}
