<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import { backgroundData } from "~/constants/background";

const isDesktop = useMediaQuery("(min-width: 48rem)");

const sectionText = `Min resa inom tech började under utbildningen och har
sedan vuxit genom projekt, teamarbete och erfarenhet.
Här är en översikt av min bakgrund från studier till arbete.`;

const sectionRootRef = ref<HTMLElement | null>(null);

const backgroundRefs = ref<HTMLElement[]>([]);

const getItemStyle = computed(() => {
	return (index: number): Record<string, string> => {
		if (!isDesktop.value) return { top: "0px", marginBottom: "0px" };

		return {
			top: `calc(1vh + ${index * 8}em)`,
			marginBottom: `${(backgroundData.length - index - 1) * 1}rem`,
		};
	};
});

function registerItemElement(element: Element | ComponentPublicInstance | null, index: number) {
	if (!(element instanceof HTMLElement)) return;

	backgroundRefs.value[index] = element;
}
</script>

<template>
	<section id="background" ref="sectionRootRef" class="min-h-screen lg:px-3">
		<div class="rounded-t-4xl bg-black">
			<AnimatedHeaderSection
				title="Utbildning & Arbete"
				subtitle="Vad jag har gjort"
				theme="light"
				:with-scroll-trigger="true">
				<AnimatedTextLines :text="sectionText" class="font-light uppercase" />
			</AnimatedHeaderSection>

			<div
				v-for="(background, index) in backgroundData"
				:key="index"
				:ref="(element) => registerItemElement(element, index)"
				class="lg:sticky min-h-[65vh] w-full border-t border-white/20 bg-black text-white px-3 py-12 md:px-6 lg:px-12"
				:style="getItemStyle(index)">
				<div class="flex flex-col space-y-12 font-light">
					<div class="flex justify-between items-center">
						<h2 class="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
							{{ background.title }}
						</h2>

						<p class="text-sm md:text-base tracking-widest text-white/50 md:text-right uppercase">
							{{ background.company }}
						</p>
					</div>

					<p
						class="text-md text-pretty leading-relaxed tracking-widest text-white/60 md:text-lg lg:text-xl 2xl:text-2xl">
						{{ background.description }}
					</p>

					<ul class="grid gap-6 lg:gap-12 lg:grid-cols-2">
						<li v-for="(item, itemIndex) in background.items" :key="itemIndex">
							<div
								class="h-full rounded-2xl border border-white/10 bg-white/3 px-8 py-8 transition duration-300">
								<h3 class="text-lg md:text-xl font-semibold tracking-wide text-white">
									{{ item.title }}
								</h3>

								<p
									class="mt-4 text-sm md:text-base lg:text-lg leading-relaxed tracking-wide text-white/60">
									{{ item.description }}
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>
