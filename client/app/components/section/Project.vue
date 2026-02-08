<script setup lang="ts">
import gsap from "gsap";
import { projectsData } from "~/constants/projects";

type ProjectId = string;

const activeHoverProjectId = ref<ProjectId | null>(null);

const previewRootElement = ref<HTMLElement | null>(null);

let gsapContext: gsap.Context | null = null;

let previewTimeline: gsap.core.Timeline | null = null;

let quickToX: ((value: number) => void) | null = null;

let quickToY: ((value: number) => void) | null = null;

const activeProject = computed(() => {
	if (!activeHoverProjectId.value) return null;

	return projectsData.find((project) => project.id === activeHoverProjectId.value) ?? null;
});

function killPreviewTimeline(): void {
	previewTimeline?.kill();

	previewTimeline = null;
}

function setupQuickTo(): void {
	const root = previewRootElement.value;

	if (!root) return;

	quickToX = gsap.quickTo(root, "x", { duration: 0.12, ease: "power3.out" });

	quickToY = gsap.quickTo(root, "y", { duration: 0.12, ease: "power3.out" });
}

function setPreviewPositionInstant(event: PointerEvent): void {
	const root = previewRootElement.value;

	if (!root) return;

	const OFFSET_X = -14;

	const OFFSET_Y = -14;

	gsap.set(root, {
		x: event.clientX + OFFSET_X,
		y: event.clientY + OFFSET_Y,
	});
}

function updatePreviewPositionSmooth(event: PointerEvent): void {
	const OFFSET_X = 50;

	const OFFSET_Y = -250;

	quickToX?.(event.clientX + OFFSET_X);

	quickToY?.(event.clientY + OFFSET_Y);
}

function animatePreviewFadeIn(): void {
	const root = previewRootElement.value;

	if (!root) return;

	killPreviewTimeline();

	previewTimeline = gsap.timeline();

	previewTimeline.fromTo(root, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.14, ease: "power2.out" });
}

function animatePreviewFadeOut(onComplete?: () => void): void {
	const root = previewRootElement.value;

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

function handleProjectPointerEnter(projectId: ProjectId, event: PointerEvent): void {
	activeHoverProjectId.value = projectId;

	nextTick(() => {
		const root = previewRootElement.value;

		if (!root) return;

		gsapContext?.revert();

		gsapContext = null;

		gsapContext = gsap.context(() => {
			gsap.set(root, { autoAlpha: 0 });
		});

		setPreviewPositionInstant(event);

		setupQuickTo();

		animatePreviewFadeIn();
	});
}

function handleProjectPointerMove(projectId: ProjectId, event: PointerEvent): void {
	if (activeHoverProjectId.value !== projectId) return;

	updatePreviewPositionSmooth(event);
}

function handleProjectPointerLeave(projectId: ProjectId): void {
	if (activeHoverProjectId.value !== projectId) return;

	animatePreviewFadeOut(() => {
		activeHoverProjectId.value = null;

		gsapContext?.revert();

		gsapContext = null;

		quickToX = null;

		quickToY = null;
	});
}

onBeforeUnmount(() => {
	killPreviewTimeline();

	gsapContext?.revert();

	gsapContext = null;
});
</script>

<template>
	<section id="projects" class="relative flex min-h-screen flex-col justify-between">
		<AnimatedHeaderSection title="Projekt" subtitle="Några projekt" theme="dark" :with-scroll-trigger="true" />

		<div class="relative flex-1 pt-12">
			<div
				v-for="project in projectsData"
				:key="project.id"
				class="group relative z-10 mx-auto max-w-450 transition"
				@pointerenter="handleProjectPointerEnter(project.id, $event)"
				@pointermove="handleProjectPointerMove(project.id, $event)"
				@pointerleave="handleProjectPointerLeave(project.id)">
				<div class="pointer-events-none absolute inset-0 transition duration-300 group-hover:border-4" />

				<div class="space-y-12 border-b px-12 py-24">
					<div class="flex items-center justify-between">
						<h2 class="text-3xl font-semibold md:text-4xl lg:text-5xl 2xl:text-6xl">
							{{ project.title }}
						</h2>

						<NuxtLink :to="project.href" class="text-lg text-black/60">Visa mer</NuxtLink>
					</div>

					<div class="flex space-x-6 text-xl font-medium">
						<p v-for="tech in project.tech" :key="tech">{{ tech }}</p>
					</div>
				</div>
			</div>

			<div
				v-if="activeProject"
				ref="previewRootElement"
				class="pointer-events-none fixed left-0 top-0 z-50 overflow-hidden rounded-3xl shadow-xl will-change-transform w-96 h-74">
				<NuxtImg
					:src="activeProject.imageSrc"
					:alt="activeProject.imageAlt"
					class="h-full w-full object-cover object-center" />
			</div>
		</div>
	</section>
</template>
