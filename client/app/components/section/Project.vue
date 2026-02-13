<script setup lang="ts">
import gsap from "gsap";
import { useMediaQuery } from "@vueuse/core";
import { projectsData } from "~/constants/projects";

type ProjectId = string;

const isDesktop = useMediaQuery("(min-width: 63rem)");

const activeHoverProjectId = ref<ProjectId | null>(null);

const previewRootElement = ref<HTMLElement | null>(null);

let gsapContext: gsap.Context | null = null;

let previewTimeline: gsap.core.Timeline | null = null;

let quickToX: ((value: number) => void) | null = null;

let quickToY: ((value: number) => void) | null = null;

const activeProject = computed(() => {
	const activeId = activeHoverProjectId.value;

	if (!activeId) return null;

	return projectsData.find((project) => project.id === activeId) ?? null;
});

function killPreviewTimeline() {
	previewTimeline?.kill();

	previewTimeline = null;
}

function setupQuickTo() {
	const root = previewRootElement.value;

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
	const root = previewRootElement.value;

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
	const root = previewRootElement.value;

	if (!root) return;

	killPreviewTimeline();

	previewTimeline = gsap.timeline();

	previewTimeline.fromTo(
		root,
		{ autoAlpha: 0 },
		{
			autoAlpha: 1,
			duration: 0.14,
			ease: "power2.out",
		},
	);
}

function animatePreviewFadeOut(onComplete?: () => void) {
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

async function handleProjectPointerEnter(projectId: ProjectId, event: PointerEvent) {
	if (!isDesktop.value) return;

	activeHoverProjectId.value = projectId;

	await nextTick();

	const root = previewRootElement.value;

	if (!root) return;

	gsapContext?.revert();

	gsapContext = null;

	gsapContext = gsap.context(() => {
		gsap.set(root, {
			autoAlpha: 0,
		});
	});

	setPreviewPositionInstant(event);

	setupQuickTo();

	animatePreviewFadeIn();
}

function handleProjectPointerMove(projectId: ProjectId, event: PointerEvent) {
	if (!isDesktop.value) return;

	if (activeHoverProjectId.value !== projectId) return;

	updatePreviewPositionSmooth(event);
}

function handleProjectPointerLeave(projectId: ProjectId) {
	if (!isDesktop.value) return;

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

		<div class="relative flex-1 lg:pt-12">
			<div
				v-for="project in projectsData"
				:key="project.id"
				class="group relative z-10 mx-auto max-w-450 transition"
				@pointerenter="handleProjectPointerEnter(project.id, $event)"
				@pointermove="handleProjectPointerMove(project.id, $event)"
				@pointerleave="handleProjectPointerLeave(project.id)">
				<div class="pointer-events-none absolute inset-0 transition duration-300 lg:group-hover:border-4" />

				<div
					class="lg:border-b px-3 md:px-12 py-12 lg:py-24 relative max-lg:flex max-md:flex-col max-md:space-y-3 max-md:space-x-0 max-lg:space-x-6 max-lg:overflow-hidden">
					<div class="space-y-3 md:space-y-6 lg:space-y-12 relative z-10">
						<h2 class="text-3xl font-semibold md:text-4xl lg:text-5xl 2xl:text-6xl">
							{{ project.title }}
						</h2>

						<div
							class="flex max-lg:space-y-3 max-md:flex-row max-lg:flex-col lg:space-x-6 max-md:space-x-6 text-md md:text-lg lg:text-xl font-medium">
							<p v-for="tech in project.tech" :key="tech">{{ tech }}</p>
						</div>
					</div>

					<div v-if="!isDesktop">
						<NuxtImg
							:src="project.imageSrc"
							:alt="project.imageAlt"
							class="object-cover object-center"
							format="webp" />
					</div>
				</div>
			</div>

			<div
				v-if="activeProject && isDesktop"
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
