loading="lazy"
<script setup lang="ts">
import gsap from "gsap";
import type { ComponentPublicInstance } from "vue";
import { useProjectHoverPreview } from "~/composables/animation/useProjectHoverPreview";
import { projectsData } from "~/constants/projects";

type ProjectId = string;

const activeHoverProjectId = ref<ProjectId | null>(null);

const previewRootElement = ref<HTMLElement | null>(null);

const listRootRef = ref<HTMLElement | null>(null);

const projectInnerRefs = ref<HTMLElement[]>([]);

const isMounted = ref(false);

const activeProject = computed(() => {
	const id = activeHoverProjectId.value;

	if (!id) return null;

	return projectsData.find((project) => project.id === id) ?? null;
});

const {
	isDesktop: mediaQueryResult,
	handleProjectPointerEnter,
	handleProjectPointerMove,
	handleProjectPointerLeave,
} = useProjectHoverPreview<ProjectId>({
	previewRootElement,
	activeHoverProjectId,
	isDesktopQuery: "(min-width: 63rem)",
});

const isDesktop = computed(() => isMounted.value && mediaQueryResult.value);

let revealContext: gsap.Context | null = null;

function registerProjectInner(element: Element | ComponentPublicInstance | null, index: number) {
	if (!(element instanceof HTMLElement)) return;

	projectInnerRefs.value[index] = element;
}

onMounted(async () => {
	isMounted.value = true;

	if (!import.meta.client) return;

	await nextTick();

	const items = projectInnerRefs.value.filter((element): element is HTMLElement => element instanceof HTMLElement);

	if (items.length === 0) return;

	revealContext?.revert();

	revealContext = gsap.context(() => {
		items.forEach((item) => {
			gsap.set(item, {
				autoAlpha: 0,
				y: 200,
			});

			gsap.to(item, {
				autoAlpha: 1,
				y: 0,
				duration: 0.9,
				ease: "power3.out",
				clearProps: "transform",
				scrollTrigger: {
					trigger: item,
					start: "top 85%",
					once: true,
					invalidateOnRefresh: true,
				},
			});
		});
	});
});

onBeforeUnmount(() => {
	revealContext?.revert();

	revealContext = null;
});
</script>

<template>
	<section id="projects" class="relative flex min-h-screen flex-col justify-between">
		<AnimatedHeaderSection title="Projekt" subtitle="Några projekt" theme="dark" :with-scroll-trigger="true" />

		<ul ref="listRootRef" class="relative flex-1 lg:pt-12 lg:px-12 pb-12 lg:pb-24">
			<li
				v-for="(project, index) in projectsData"
				:key="project.id"
				class="group relative z-10 mx-auto max-w-400 transition"
				@pointerenter="handleProjectPointerEnter(project.id, $event)"
				@pointermove="handleProjectPointerMove(project.id, $event)"
				@pointerleave="handleProjectPointerLeave(project.id)">
				<div :ref="(el) => registerProjectInner(el, index)">
					<NuxtLink :to="project.href" target="_blank" :aria-label="`Besök Projekt ${project.title}`">
						<div
							class="pointer-events-none absolute inset-0 border-4 border-black opacity-0 transition-all duration-300 ease-out will-change-transform lg:group-hover:opacity-100" />

						<div
							class="lg:border-b px-3 md:px-12 py-6 md:py-12 lg:py-24 relative max-lg:flex max-md:flex-col max-md:space-y-3 max-md:space-x-0 max-lg:space-x-6 max-lg:overflow-hidden">
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
									class="object-cover object-center rounded-2xl"
									format="webp"
									loading="lazy" />
							</div>
						</div>
					</NuxtLink>
				</div>
			</li>

			<div
				v-if="activeProject && isDesktop"
				ref="previewRootElement"
				class="pointer-events-none fixed left-0 top-0 z-50 overflow-hidden rounded-3xl shadow-xl will-change-transform w-100 2xl:w-160 h-80 2xl:h-100">
				<NuxtImg
					:src="activeProject.imageSrc"
					:alt="activeProject.imageAlt"
					format="webp"
					loading="lazy"
					class="h-full w-full object-cover object-center" />
			</div>
		</ul>
	</section>
</template>
