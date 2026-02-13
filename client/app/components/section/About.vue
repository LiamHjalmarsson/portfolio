<script setup lang="ts">
import { useImageReveal } from "~/composables/animation/useImageReveal";
import { useScaleAnimation } from "~/composables/animation/useScaleAnimation";

const sectionRootRef = ref<HTMLElement | null>(null);

const imageRef = ref<HTMLElement | null>(null);

const aboutPrimaryText = `Jag är baserad i Skåne och hämtar mycket inspiration
från naturen och stillheten runt omkring.
Ofta hittar du mig ute på vandring eller med mina två hundar.`;

const aboutSecondaryText = `För mig handlar mycket om att vara närvarande i det jag gör.
Att lyssna, justera och låta erfarenhet forma nästa steg,
snarare än att skynda vidare.`;

useScaleAnimation({
	animationRootElement: sectionRootRef,
	withScrollTrigger: true,
	scaleTo: 0.85,
	start: "bottom 70%",
	end: "bottom 10%",
	scrub: true,
});

useImageReveal({
	rootEl: sectionRootRef,
	targetEl: imageRef,
	withScrollTrigger: true,
	start: "top 45%",
	durationSeconds: 2,
	ease: "power4.out",
});
</script>

<template>
	<section id="about" ref="sectionRootRef" class="min-h-screen lg:px-3">
		<div class="bg-black rounded-b-4xl">
			<AnimatedHeaderSection subtitle="Lite mer" title="Om mig" theme="light" :with-scroll-trigger="true">
				<AnimatedTextLines :text="aboutPrimaryText" class="font-light uppercase" />
			</AnimatedHeaderSection>

			<div
				class="flex max-md:flex-col-reverse md:items-center justify-between max-md:space-y-reverse max-md:mt-6 max-md:space-y-12 md:space-x-16 px-3 md:px-6 lg:px-12 pb-16 font-ligt tracking-wide text-white/60">
				<AnimatedTextLines :text="aboutSecondaryText" class="font-light uppercase" />

				<div ref="imageRef" class="flex-1 h-140 relative overflow-hidden">
					<NuxtImg src="/images/me.png" class="rounded-3xl object-cover lg:absolute w-full h-full" />
				</div>
			</div>
		</div>
	</section>
</template>
