<script setup lang="ts">
import gsap from "gsap";
import { useMediaQuery } from "@vueuse/core";
import { backgroundData } from "../../constants/background";

const backgroundRefs = ref<HTMLElement[]>([]);

const isDesktop = useMediaQuery("(min-width: 48rem)");

const text = `Min resa inom tech började under utbildningen och har 
sedan vuxit genom projekt och teamarbete.
Här är en översikt av min bakgrund från studier till arbete.`;

const getBackgroundStyle = computed(() => {
	return (index: number): Record<string, string> => {
		if (!isDesktop.value) return { top: "0" };

		return {
			top: `calc(1vh + ${index * 7}em)`,
			marginBottom: `${(backgroundData.length - index - 1) * 5}rem`,
		};
	};
});

onMounted(() => {
	gsap.from("#background", {
		y: 100,
		scrollTrigger: {
			trigger: "#background",
			start: "top 80%",
		},
		duration: 1,
		ease: "power1.inOut",
	});

	backgroundRefs.value.forEach((element) => {
		if (!element) return;

		gsap.from(element, {
			y: 100,
			scrollTrigger: {
				trigger: element,
				start: "top 80%",
			},
			duration: 1,
		});
	});
});
</script>

<template>
	<section id="background" class="min-h-screen lg:px-3">
		<div class="bg-black rounded-t-4xl">
			<AnimatedHeaderSection
				title="Utbildning & Arbete"
				subtitle="Vad jag har gjort"
				theme="light"
				:with-scroll-trigger="true">
				<AnimatedTextLines :text="text" class="font-light uppercase" />
			</AnimatedHeaderSection>

			<div
				v-for="(background, index) in backgroundData"
				:key="index"
				:ref="
					(element) => {
						if (element) backgroundRefs[index] = element as HTMLElement;
					}
				"
				class="sticky px-3 md:px-6 lg:px-12 py-12 text-white bg-black border-t-2 border-white/30"
				:style="getBackgroundStyle(index)">
				<div class="flex items-center justify-between font-light">
					<div class="flex flex-col space-y-6 lg:space-y-12">
						<div class="flex max-md:flex-col md:items-center justify-between max-md:spave-y-3 md:space-x-3">
							<h2 class="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
								{{ background.title }}
							</h2>

							<p>
								{{ background.company }}
							</p>
						</div>

						<p
							class="text-md md:text-lg lg:text-xl 2xl:text-2xl leading-relaxed tracking-widest text-white/60 text-pretty">
							{{ background.description }}
						</p>

						<div
							class="max-lg:pt-6 flex flex-col text-sm md:text-base lg:text-xl 2xl:text-2xl space-y-4 sm:space-y-12 text-white/80">
							<div v-for="(item, itemIndex) in background.items" :key="itemIndex">
								<h3 class="flex">
									<span class="mr-12 text-lg text-white/30">
										{{ itemIndex + 1 }}
									</span>
									{{ item.title }}
								</h3>
								<div
									v-if="itemIndex < background.items.length - 1"
									class="w-full h-px my-2 bg-white/30" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
