<script setup lang="ts">
import gsap from "gsap";

const imageRef = ref<HTMLElement | null>(null);

const aboutText = `Jag började min resa inom tech under utbildningen 
och hittade snabbt en passion för utveckling och design.
Sedan dess har jag fortsatt bygga, utforska och lära mig 
genom verkliga projekt och samarbeten.`;

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
	<section id="about" class="min-h-screen px-2">
		<div class="bg-black rounded-b-4xl">
			<AnimatedHeaderSection subtitle="Lite om mig" title="About" theme="light" :with-scroll-trigger="true">
				<AnimatedTextLines :text="aboutText" class="font-light uppercase" />
			</AnimatedHeaderSection>

			<div
				class="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-ligt tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
				<AnimatedTextLines :text="aboutText" class="font-light uppercase" />

				<div ref="imageRef">
					<NuxtImg src="/images/test.png" class="rounded-3xl" />
				</div>
			</div>
		</div>
	</section>
</template>
