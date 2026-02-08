<!-- components/sections/HomeHeroSection.vue -->
<script setup lang="ts">
import { useFadingRotatingImages } from "~/composable/animation/useFadingRotatingImages";
import { useGridAnimation } from "~/composable/animation/useGridAnimation";
import { socials } from "~/constants/socials";

const heroDescriptionText = `Här utforskar jag kod, design och digitala lösningar.
Kika runt och hör av dig om du vill bygga något tillsammans,
eller bara ta en kopp kaffe och prata idéer.`;

const rotatingImageSources = ["/images/nemo.png", "/images/murphy.png", "/images/nemo1.png"];

const gridRootElement = ref<HTMLElement | null>(null);

const leftCardElement = ref<HTMLElement | null>(null);

const topRightCardElement = ref<HTMLElement | null>(null);

const rotatingCardElement = ref<HTMLElement | null>(null);

const animatedGridItemElements = ref<HTMLElement[]>([]);

function rebuildAnimatedGridItemElements(): void {
	animatedGridItemElements.value = [
		leftCardElement.value,
		topRightCardElement.value,
		rotatingCardElement.value,
	].filter((element): element is HTMLElement => element !== null);
}

const currentImageWrapperElement = ref<HTMLElement | null>(null);

const nextImageWrapperElement = ref<HTMLElement | null>(null);

const { currentImageIndex, nextImageIndex, startImageRotation, stopImageRotation } = useFadingRotatingImages({
	rotatingImageSources,
	currentImageWrapperElement,
	nextImageWrapperElement,
	swapIntervalMs: 5000,
	transitionDurationSeconds: 0.9,
});

const { playAnimation: playGridAnimation, revertAnimation: revertGridAnimation } = useGridAnimation({
	animationScopeRootElement: gridRootElement,
	animatedItemElements: animatedGridItemElements,
	itemDurationSeconds: 0.9,
	itemOverlapSeconds: 0.15,
	itemEase: "circ.out",
});

onMounted(async () => {
	if (!import.meta.client) return;

	await nextTick();

	rebuildAnimatedGridItemElements();

	playGridAnimation();

	startImageRotation();
});

onBeforeUnmount(() => {
	stopImageRotation();

	revertGridAnimation();
});
</script>

<template>
	<section id="home" class="relative flex min-h-screen flex-col justify-end overflow-hidden">
		<div
			class="absolute inset-0 flex h-full w-full items-start xl:items-center xl:justify-end xl:pb-80 pt-24 md:pt-32 xl:pt-0 px-3 md:px-6 lg:px-12">
			<div
				ref="gridRootElement"
				class="grid h-1/2 lg:h-130 2xl:h-162 w-full xl:w-180 2xl:w-220 grid-cols-12 grid-rows-12 gap-3 overflow-hidden">
				<div
					ref="leftCardElement"
					class="col-span-12 sm:col-span-6 row-span-6 sm:row-span-12 relative overflow-hidden rounded-4xl p-6">
					<NuxtImg
						src="/images/me.png"
						alt="Liam Hjalmarsson"
						class="absolute inset-0 h-full w-full object-cover"
						format="webp" />
				</div>

				<div
					ref="topRightCardElement"
					class="col-span-4 sm:col-span-6 row-span-6 sm:row-span-2 grid sm:grid-cols-3 items-center md:justify-between overflow-hidden rounded-4xl bg-primary-600 p-3 text-white">
					<NuxtLink
						v-for="social in socials"
						:key="social.name"
						:to="social.href"
						class="flex h-full items-center justify-center w-full">
						<Icon :name="social.icon" size="36" />
					</NuxtLink>

					<button class="border-0 outline-0 flex justify-center items-center cursor-pointer">
						<Icon name="mdi:download" size="36" />
					</button>
				</div>

				<div
					ref="rotatingCardElement"
					class="col-span-8 sm:col-span-6 row-span-6 sm:row-span-10 relative overflow-hidden rounded-4xl">
					<div ref="currentImageWrapperElement" class="absolute inset-0">
						<NuxtImg
							:src="rotatingImageSources[currentImageIndex]"
							alt="Showcase image"
							class="h-full w-full object-cover"
							format="webp" />
					</div>

					<div ref="nextImageWrapperElement" class="absolute inset-0">
						<NuxtImg
							:src="rotatingImageSources[nextImageIndex]"
							alt="Next showcase image"
							class="h-full w-full object-cover"
							format="webp" />
					</div>
				</div>
			</div>
		</div>

		<AnimatedHeaderSection
			title="Liam Hjalmarsson"
			subtitle="Fullstack developer"
			theme="dark"
			:with-scroll-trigger="false">
			<AnimatedTextLines :text="heroDescriptionText" class="font-light uppercase" />
		</AnimatedHeaderSection>
	</section>
</template>
