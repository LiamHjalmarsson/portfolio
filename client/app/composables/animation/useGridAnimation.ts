import gsap from "gsap";

export type Options = {
	animationRootElement: Ref<HTMLElement | null>;
	animatedItemElements: Ref<HTMLElement[]>;
	initialState?: gsap.TweenVars;
	animateToState?: gsap.TweenVars;
	itemDurationSeconds?: number;
	itemOverlapSeconds?: number;
	itemEase?: string;
};

export type UseGridAnimation = {
	playGridAnimation: () => void;
	reverseGridAnimation: () => void;
	revertGridAnimation: () => void;
};

export function useGridAnimation(options: Options) {
	let context: gsap.Context | null = null;

	let timelineRef: gsap.core.Timeline | null = null;

	function killTimeline() {
		timelineRef?.kill();

		timelineRef = null;
	}

	function setup() {
		const root = options.animationRootElement.value;

		const items = options.animatedItemElements.value;

		if (!root || items.length === 0) return;

		context?.revert();

		context = gsap.context(() => {
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

			gsap.set(items, initialState);

			killTimeline();

			const overlapSeconds = options.itemOverlapSeconds ?? 0.15;

			const timeline = gsap.timeline({ paused: true });

			items.forEach((item, index) => {
				timeline.to(item, animateToState, index === 0 ? undefined : `<+${overlapSeconds}`);
			});

			timelineRef = timeline;
		}, root);
	}

	function playGridAnimation() {
		if (!timelineRef) {
			setup();

			if (!timelineRef) {
				void nextTick().then(() => {
					setup();

					timelineRef?.play(0);
				});
				return;
			}
		}

		timelineRef.play(0);
	}

	function reverseGridAnimation() {
		timelineRef?.reverse();
	}

	function revertGridAnimation() {
		killTimeline();

		context?.revert();

		context = null;
	}

	onBeforeUnmount(() => {
		revertGridAnimation();
	});

	return {
		playGridAnimation,
		reverseGridAnimation,
		revertGridAnimation,
	};
}
