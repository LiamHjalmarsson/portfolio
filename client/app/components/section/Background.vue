<script setup lang="ts">
import gsap from "gsap";
import { useMediaQuery } from "@vueuse/core";
import { backgroundData } from "~/constants/background";

const isDesktop = useMediaQuery("(min-width: 48rem)");

const sectionText = `Min resa inom tech började under utbildningen och har
sedan vuxit genom projekt, teamarbete och erfarenhet.
Här är en översikt av min bakgrund från studier till arbete.`;

const sectionRootRef = ref<HTMLElement | null>(null);

const listRefs = ref<HTMLElement[]>([]);

let context: gsap.Context | null = null;

const getItemStyle = computed(() => {
	return (index: number): Record<string, string> => {
		if (!isDesktop.value) return { top: "0px", marginBottom: "0px" };

		return {
			top: `calc(1vh + ${index * 8}em)`,
			marginBottom: `${(backgroundData.length - index - 1) * 1}rem`,
		};
	};
});

function registerList(element: Element | null, index: number) {
	if (!(element instanceof HTMLElement)) return;

	listRefs.value[index] = element;
}

onMounted(async () => {
	if (!import.meta.client) return;
	await nextTick();

	const root = sectionRootRef.value;
	const lists = listRefs.value.filter((el): el is HTMLElement => el instanceof HTMLElement);

	if (!root || lists.length === 0) return;

	context?.revert();

	context = gsap.context(() => {
		lists.forEach((list) => {
			const items = Array.from(list.querySelectorAll<HTMLElement>("li"));

			gsap.set(items, {
				autoAlpha: 0,
				y: 200,
			});

			gsap.timeline({
				scrollTrigger: {
					trigger: list,
					start: "top 85%",
				},
			}).to(items, {
				autoAlpha: 1,
				y: 0,
				duration: 0.7,
				stagger: 0.15,
				ease: "power3.out",
			});
		});
	}, root);
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
				class="lg:sticky min-h-[65vh] w-full border-t border-white/20 bg-black text-white px-3 py-12 md:px-6 lg:px-12"
				:style="getItemStyle(index)">
				<div class="flex flex-col space-y-6 lg:space-y-12 font-light">
					<div class="flex max-sm:flex-col justify-between sm:items-center gap-3">
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
					<ul :ref="(el) => registerList(el, index)" class="grid gap-3 lg:gap-6 lg:grid-cols-2">
						<li v-for="(item, itemIndex) in background.items" :key="itemIndex">
							<div class="h-full rounded-2xl border border-white/10 bg-white/3 p-6 lg:p-12">
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
