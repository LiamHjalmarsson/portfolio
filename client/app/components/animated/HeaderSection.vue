<script setup lang="ts">
import gsap from "gsap";

const { theme, withScrollTrigger } = defineProps<{
	subtitle: string;
	title: string;
	theme: "light" | "dark";
	withScrollTrigger: boolean;
}>();

const slots = useSlots();

const sectionRootRef = ref(null);

const headerContentRef = ref(null);

const themeColor = computed(() => (theme === "dark" ? "text-black" : "text-white"));

const hasDefaultSlotContent = computed(() => {
	const renderedDefaultSlotNodes = slots.default?.() ?? [];

	return renderedDefaultSlotNodes.length > 0;
});

onMounted(async () => {
	if (!import.meta.client) return;

	await nextTick();

	const timeline = gsap.timeline({
		scrollTrigger: withScrollTrigger
			? {
					trigger: sectionRootRef.value,
				}
			: undefined,
	});

	timeline.from(sectionRootRef.value, {
		y: "30vh",
		duration: 1,
		ease: "circ.out",
	});

	timeline.from(
		headerContentRef.value,
		{
			opacity: 0,
			y: 200,
			duration: 1,
			ease: "circ.out",
		},
		"<+0.2",
	);
});
</script>

<template>
	<div ref="sectionRootRef ">
		<div :style="{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }">
			<div ref="headerContentRef" class="flex flex-col justify-center gap-3 md:gap-6 pb-6 pt-24 lg:gap-12">
				<p
					class="text-sm lg:text-lg font-light tracking-[0.5rem] uppercase px-3 md:px-6 lg:px-12"
					:class="themeColor">
					{{ subtitle }}
				</p>
				<div class="px-3 md:px-6 lg:px-12">
					<h1
						class="flex flex-col flex-wrap gap-12 sm:gap-16 md:block uppercase text-4xl sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl font-bold -tracking-tighter"
						:class="themeColor">
						{{ title }}
					</h1>
				</div>
			</div>
		</div>
		<div v-if="hasDefaultSlotContent" class="relative px-3 md:px-6 lg:px-12" :class="themeColor">
			<div class="py-8 lg:py-12 2xl:py-16 text-end">
				<slot />
			</div>
		</div>
	</div>
</template>
