import gsap from "gsap";

export type UseScaleAnimationOptions = {
	animationRootElement: Ref<HTMLElement | null>;
	scaleTo?: number;
	ease?: string;
	withScrollTrigger?: boolean;
	start?: string;
	end?: string;
	scrub?: boolean | number;
};

export type UseScaleAnimation = {
	startScaleAnimation: () => void;
	revertScaleAnimation: () => void;
};

export function useScaleAnimation(options: UseScaleAnimationOptions) {
	let context: gsap.Context | null = null;

	function setup(): void {
		const rootElement = options.animationRootElement.value;

		if (!rootElement) return;

		context?.revert();

		context = gsap.context(() => {
			gsap.to(rootElement, {
				scale: options.scaleTo ?? 0.85,
				ease: options.ease ?? "power1.inOut",
				scrollTrigger: options.withScrollTrigger
					? {
							trigger: rootElement,
							start: options.start ?? "bottom 70%",
							end: options.end ?? "bottom 10%",
							scrub: options.scrub ?? true,
						}
					: undefined,
			});
		}, rootElement);
	}

	function startScaleAnimation(): void {
		if (!import.meta.client) return;

		if (!context) setup();
	}

	function revertScaleAnimation(): void {
		context?.revert();

		context = null;
	}

	onMounted(async () => {
		await nextTick();

		setup();
	});

	onBeforeUnmount(() => {
		revertScaleAnimation();
	});

	return {
		startScaleAnimation,
		revertScaleAnimation,
	};
}
