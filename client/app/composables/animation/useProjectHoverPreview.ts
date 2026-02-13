import gsap from "gsap";
import { useMediaQuery } from "@vueuse/core";

export type Options<ProjectId extends string = string> = {
	isDesktopQuery?: string;
	previewRootElement: Ref<HTMLElement | null>;
	activeHoverProjectId: Ref<ProjectId | null>;
};

export type UseProjectHoverPreviewReturn<ProjectId extends string = string> = {
	isDesktop: Ref<boolean>;
	handleProjectPointerEnter: (projectId: ProjectId, event: PointerEvent) => Promise<void>;
	handleProjectPointerMove: (projectId: ProjectId, event: PointerEvent) => void;
	handleProjectPointerLeave: (projectId: ProjectId) => void;
	revertProjectHoverPreview: () => void;
};

export function useProjectHoverPreview<ProjectId extends string = string>(options: Options<ProjectId>) {
	const isDesktop = useMediaQuery(options.isDesktopQuery ?? "(min-width: 63rem)");

	let context: gsap.Context | null = null;

	let previewTimeline: gsap.core.Timeline | null = null;

	let quickToX: ((value: number) => void) | null = null;

	let quickToY: ((value: number) => void) | null = null;

	function killPreviewTimeline() {
		previewTimeline?.kill();

		previewTimeline = null;
	}

	function setupQuickTo() {
		const root = options.previewRootElement.value;

		if (!root) return;

		quickToX = gsap.quickTo(root, "x", {
			duration: 0.3,
			ease: "power3.out",
		});

		quickToY = gsap.quickTo(root, "y", {
			duration: 0.3,
			ease: "power3.out",
		});
	}

	function setPreviewPositionInstant(event: PointerEvent) {
		const root = options.previewRootElement.value;

		if (!root) return;

		const OFFSET_X = -14;

		const OFFSET_Y = -14;

		gsap.set(root, {
			x: event.clientX + OFFSET_X,
			y: event.clientY + OFFSET_Y,
		});
	}

	function updatePreviewPositionSmooth(event: PointerEvent) {
		const OFFSET_X = 50;

		const OFFSET_Y = -250;

		quickToX?.(event.clientX + OFFSET_X);

		quickToY?.(event.clientY + OFFSET_Y);
	}

	function animatePreviewFadeIn() {
		const root = options.previewRootElement.value;

		if (!root) return;

		killPreviewTimeline();

		previewTimeline = gsap.timeline();

		previewTimeline.fromTo(
			root,
			{
				autoAlpha: 0,
			},
			{
				autoAlpha: 1,
				duration: 0.14,
				ease: "power2.out",
			},
		);
	}

	function animatePreviewFadeOut(onComplete?: () => void) {
		const root = options.previewRootElement.value;

		if (!root) {
			onComplete?.();

			return;
		}

		killPreviewTimeline();

		previewTimeline = gsap.timeline({ onComplete });

		previewTimeline.to(root, {
			autoAlpha: 0,
			duration: 0.12,
			ease: "power2.out",
		});
	}

	async function handleProjectPointerEnter(projectId: ProjectId, event: PointerEvent) {
		if (!isDesktop.value) return;

		options.activeHoverProjectId.value = projectId;

		await nextTick();

		const root = options.previewRootElement.value;

		if (!root) return;

		context?.revert();

		context = gsap.context(() => {
			gsap.set(root, { autoAlpha: 0 });
		}, root);

		setPreviewPositionInstant(event);

		setupQuickTo();

		animatePreviewFadeIn();
	}

	function handleProjectPointerMove(projectId: ProjectId, event: PointerEvent) {
		if (!isDesktop.value) return;

		if (options.activeHoverProjectId.value !== projectId) return;

		updatePreviewPositionSmooth(event);
	}

	function handleProjectPointerLeave(projectId: ProjectId) {
		if (!isDesktop.value) return;

		if (options.activeHoverProjectId.value !== projectId) return;

		animatePreviewFadeOut(() => {
			options.activeHoverProjectId.value = null;

			context?.revert();

			context = null;

			quickToX = null;

			quickToY = null;
		});
	}

	function revertProjectHoverPreview() {
		options.activeHoverProjectId.value = null;

		killPreviewTimeline();

		context?.revert();

		context = null;

		quickToX = null;

		quickToY = null;
	}

	watch(isDesktop, (desktop) => {
		if (!desktop && options.activeHoverProjectId.value) {
			revertProjectHoverPreview();
		}
	});

	onBeforeUnmount(() => {
		revertProjectHoverPreview();
	});

	return {
		isDesktop,
		handleProjectPointerEnter,
		handleProjectPointerMove,
		handleProjectPointerLeave,
		revertProjectHoverPreview,
	};
}
