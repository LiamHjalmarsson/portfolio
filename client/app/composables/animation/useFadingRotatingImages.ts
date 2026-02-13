import gsap from "gsap";

export type UseFadingRotatingImagesOptions = {
	animationRootElement: Ref<HTMLElement | null>;
	rotatingImageSources: string[];
	currentImageWrapperElement: Ref<HTMLElement | null>;
	nextImageWrapperElement: Ref<HTMLElement | null>;
	swapIntervalMs: number;
	transitionDurationSeconds: number;
	imageEase?: string;
};

export type UseFadingRotatingImages = {
	currentImageIndex: Ref<number>;
	nextImageIndex: Ref<number>;
	startImageRotation: () => void;
	stopImageRotation: () => void;
	revertImageRotation: () => void;
};

export function useFadingRotatingImages(options: UseFadingRotatingImagesOptions) {
	const currentImageIndex = ref(0);

	const nextImageIndex = ref(Math.min(1, Math.max(0, options.rotatingImageSources.length - 1)));

	const swapTimeoutId = ref<number | null>(null);

	let transitionTimelineRef: gsap.core.Timeline | null = null;

	let context: gsap.Context | null = null;

	function clearScheduledSwap() {
		if (swapTimeoutId.value === null) return;

		window.clearTimeout(swapTimeoutId.value);

		swapTimeoutId.value = null;
	}

	function killTransition() {
		transitionTimelineRef?.kill();

		transitionTimelineRef = null;
	}

	function scheduleNextSwap() {
		clearScheduledSwap();

		swapTimeoutId.value = window.setTimeout(() => {
			void swapImage();
		}, options.swapIntervalMs);
	}

	function prepareWrapperOpacity() {
		const currentWrapper = options.currentImageWrapperElement.value;

		const nextWrapper = options.nextImageWrapperElement.value;

		if (!currentWrapper || !nextWrapper) return;

		gsap.set(currentWrapper, { opacity: 1 });

		gsap.set(nextWrapper, { opacity: 0 });
	}

	async function swapImage() {
		const currentWrapper = options.currentImageWrapperElement.value;

		const nextWrapper = options.nextImageWrapperElement.value;

		if (!currentWrapper || !nextWrapper) {
			scheduleNextSwap();

			return;
		}

		killTransition();

		transitionTimelineRef = gsap.timeline({
			onComplete: () => {
				currentImageIndex.value = nextImageIndex.value;

				nextImageIndex.value = (nextImageIndex.value + 1) % options.rotatingImageSources.length;

				prepareWrapperOpacity();

				scheduleNextSwap();
			},
		});

		transitionTimelineRef
			.to(currentWrapper, {
				opacity: 0,
				duration: options.transitionDurationSeconds,
				ease: options.imageEase ?? "power2.out",
			})
			.to(
				nextWrapper,
				{
					opacity: 1,
					duration: options.transitionDurationSeconds,
					ease: options.imageEase ?? "power2.out",
				},
				"<",
			);
	}

	function setup() {
		const root = options.animationRootElement.value;

		if (!root) return;

		context?.revert();

		context = gsap.context(() => {
			prepareWrapperOpacity();
		}, root);
	}

	function startImageRotation() {
		if (!import.meta.client) return;

		if (!context) setup();

		scheduleNextSwap();
	}

	function stopImageRotation() {
		if (!import.meta.client) return;

		clearScheduledSwap();

		killTransition();
	}

	function revertImageRotation() {
		stop();

		context?.revert();

		context = null;
	}

	onMounted(async () => {
		await nextTick();

		setup();
	});

	onBeforeUnmount(() => {
		revertImageRotation();
	});

	return {
		currentImageIndex,
		nextImageIndex,
		startImageRotation,
		stopImageRotation,
		revertImageRotation,
	};
}
