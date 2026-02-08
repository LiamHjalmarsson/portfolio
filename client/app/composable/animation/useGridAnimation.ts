import gsap from "gsap";

export type UseGridAnimationOptions = {
	animationScopeRootElement: Ref<HTMLElement | null>;
	animatedItemElements: Ref<HTMLElement[]>;
	initialState?: gsap.TweenVars;
	animateToState?: gsap.TweenVars;
	itemDurationSeconds?: number;
	itemOverlapSeconds?: number;
	itemEase?: string;
};

export type UseGridAnimation = {
	playAnimation: () => void;
	revertAnimation: () => void;
};

export function useGridAnimation(options: UseGridAnimationOptions) {
	let gsapContext: gsap.Context | null = null;

	let animationTimeline: gsap.core.Timeline | null = null;

	function playAnimation(): void {
		const scopeRootElement = options.animationScopeRootElement.value;

		const animatedItems = options.animatedItemElements.value;

		if (!scopeRootElement || animatedItems.length === 0) return;

		gsapContext?.revert();

		gsapContext = null;

		gsapContext = gsap.context(() => {
			const initialState: gsap.TweenVars = {
				opacity: 0,
				y: 200,
				scale: 0,
				...options.initialState,
			};

			const animateToState: gsap.TweenVars = {
				opacity: 1,
				y: 0,
				scale: 1,
				duration: options.itemDurationSeconds ?? 0.9,
				ease: options.itemEase ?? "circ.out",
				...options.animateToState,
			};

			gsap.set(animatedItems, initialState);

			animationTimeline?.kill();

			animationTimeline = gsap.timeline();

			const overlapSeconds = options.itemOverlapSeconds ?? 0.15;

			animatedItems.forEach((itemElement, index) => {
				animationTimeline!.to(itemElement, animateToState, index === 0 ? undefined : `<+${overlapSeconds}`);
			});
		}, scopeRootElement);
	}

	function revertAnimation(): void {
		animationTimeline?.kill();

		animationTimeline = null;

		gsapContext?.revert();

		gsapContext = null;
	}

	return {
		playAnimation,
		revertAnimation,
	};
}
