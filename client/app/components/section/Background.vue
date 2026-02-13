<script setup lang="ts">
import gsap from "gsap";
import { useMediaQuery } from "@vueuse/core";
import { backgroundData } from "~/constants/background";

const isDesktop = useMediaQuery("(min-width: 48rem)");

const sectionText = `Min resa inom tech började under utbildningen och har
sedan vuxit genom projekt, teamarbete och erfarenhet.
Här är en översikt av min bakgrund från studier till arbete.`;

const sectionRootRef = ref<HTMLElement | null>(null);

const backgroundRefs = ref<HTMLElement[]>([]);

let context: gsap.Context | null = null;

const getItemStyle = computed(() => {
	return (index: number): Record<string, string> => {
		if (!isDesktop.value) return { top: "0px", marginBottom: "0px" };

		return {
			top: `calc(1vh + ${index * 8}em)`,
			marginBottom: `${(backgroundData.length - index - 1) * 3}rem`,
		};
	};
});

function registerItemElement(element: Element | ComponentPublicInstance | null, index: number) {
	if (!element || !(element instanceof HTMLElement)) return;

	backgroundRefs.value[index] = element;
}

onMounted(async () => {
	await nextTick();

	const sectionRootElement = sectionRootRef.value;

	if (!sectionRootElement) return;

	const itemElements = backgroundRefs.value.filter(
		(element): element is HTMLElement => element instanceof HTMLElement,
	);

	if (itemElements.length === 0) return;

	context?.revert();

	context = gsap.context(() => {
		gsap.from(sectionRootElement, {
			y: 100,
			duration: 1,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: sectionRootElement,
				start: "top 80%",
			},
		});

		itemElements.forEach((element) => {
			gsap.from(element, {
				y: 40,
				duration: 1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: element,
					start: "top 85%",
				},
			});
		});
	}, sectionRootElement);
});

onBeforeUnmount(() => {
	context?.revert();

	context = null;
});
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
				:ref="(el) => registerItemElement(el, index)"
				class="sticky border-t-2 border-white/30 bg-black px-3 py-12 text-white md:px-6 lg:px-12"
				:style="getItemStyle(index)">
				<div class="flex items-center justify-between font-light">
					<div class="flex flex-col space-y-6 lg:space-y-12">
						<div class="flex justify-between md:items-center max-md:flex-col md:space-x-3">
							<h2 class="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
								{{ background.title }}
							</h2>

							<p>
								{{ background.company }}
							</p>
						</div>

						<p
							class="text-md text-pretty leading-relaxed tracking-widest text-white/60 md:text-lg lg:text-xl 2xl:text-2xl">
							{{ background.description }}
						</p>

						<div
							class="flex flex-col space-y-4 text-sm text-white/80 max-lg:pt-6 sm:space-y-12 md:text-base lg:text-xl 2xl:text-2xl">
							<div v-for="(item, itemIndex) in background.items" :key="itemIndex">
								<h3 class="flex">
									<span class="mr-12 text-lg text-white/30">
										{{ itemIndex + 1 }}
									</span>
									{{ item.title }}
								</h3>

								<div class="text-md my-6 ml-12">
									{{ item.description }}
								</div>

								<div
									v-if="itemIndex < background.items.length - 1"
									class="my-2 h-px w-full bg-white/30" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
