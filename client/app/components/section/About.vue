<script setup lang="ts">
import gsap from "gsap";

const imageRef = ref<HTMLElement | null>(null);

const aboutPrimaryText = `Jag är baserad i Sverige och hämtar mycket inspiration
från naturen och stillheten runt omkring.
Ofta hittar du mig ute på vandring eller med mina två hundar.`;

const aboutSecondaryText = `För mig handlar mycket om att vara närvarande i det jag gör.
Att lyssna, justera och låta erfarenhet forma nästa steg,
snarare än att skynda vidare.`;

onMounted(async () => {
	gsap.to("#about", {
		scale: 0.85,
		scrollTrigger: {
			trigger: "#about",
			start: "bottom 80%",
			end: "bottom 10%",
			scrub: true,
			markers: false,
		},
		ease: "power1.inOut",
	});

	gsap.set(imageRef.value, {
		clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
	});

	gsap.to(imageRef.value, {
		clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
		duration: 2,
		ease: "power4.out",
		scrollTrigger: { trigger: imageRef.value },
	});
});
</script>

<template>
	<section id="about" class="min-h-screen lg:px-3">
		<div class="bg-black rounded-b-4xl">
			<AnimatedHeaderSection subtitle="Lite mer" title="Om mig" theme="light" :with-scroll-trigger="true">
				<AnimatedTextLines :text="aboutPrimaryText" class="font-light uppercase" />
			</AnimatedHeaderSection>

			<div
				class="flex max-md:flex-col-reverse md:items-center justify-between max-md:space-y-reverse max-md:space-y-8 md:space-x-16 px-3 md:px-6 lg:px-12 pb-16 font-ligt tracking-wide text-white/60">
				<AnimatedTextLines :text="aboutSecondaryText" class="font-light uppercase" />

				<div ref="imageRef" class="flex-1 h-140 relative overflow-hidden">
					<NuxtImg src="/images/me.png" class="rounded-3xl object-cover lg:absolute w-full h-full" />
				</div>
			</div>
		</div>
	</section>
</template>
