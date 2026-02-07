<script setup lang="ts">
import gsap from "gsap";

const { theme, withScrollTrigger } = defineProps<{
	subtitle: string;
	title: string;
	theme: "light" | "dark";
	withScrollTrigger: boolean;
}>();

const contextRef = ref(null);

const headerRef = ref(null);

const themeColor = computed(() => (theme === "dark" ? "text-black" : "text-white"));

onMounted(async () => {
	if (!import.meta.client) return;

	await nextTick();

	const timeline = gsap.timeline({
		scrollTrigger: withScrollTrigger
			? {
					trigger: contextRef.value,
				}
			: undefined,
	});

	timeline.from(contextRef.value, {
		y: "30vh",
		duration: 1,
		ease: "circ.out",
	});

	timeline.from(
		headerRef.value,
		{
			opacity: 0,
			y: "200",
			duration: 1,
			ease: "circ.out",
		},
		"<+0.2",
	);
});
</script>

<template>
	<div ref="contextRef">
		<div :style="{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }">
			<div ref="headerRef" class="flex flex-col justify-center gap-10 pb-6 pt-24 sm:gap-12">
				<p class="text-sm lg:text-lg font-light tracking-[0.5rem] uppercase px-6 sm:px-10" :class="themeColor">
					{{ subtitle }}
				</p>
				<div class="px-6 sm:px-10">
					<h1
						class="flex flex-col flex-wrap gap-12 sm:gap-16 md:block uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold -tracking-tighter"
						:class="themeColor">
						{{ title }}xx
					</h1>
				</div>
			</div>
		</div>
		<div class="relative px-10" :class="themeColor">
			<div class="py-12 sm:py-16 text-end">
				<slot />
			</div>
		</div>
	</div>
</template>
