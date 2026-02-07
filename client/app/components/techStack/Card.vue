<script setup lang="ts">
import gsap from "gsap";
import type { TechTileSize } from "~/constants/stack";

withDefaults(
	defineProps<{
		size: TechTileSize;
		isLastColumn?: boolean;
	}>(),
	{
		isLastColumn: false,
	},
);

const iconRef = ref(null);

onMounted(async () => {
	if (!import.meta.client) return;

	await nextTick();

	gsap.from(iconRef.value, {
		opacity: 0,
		duration: 2,
		scrollTrigger: {
			trigger: iconRef.value,
			start: "top 80%",
		},
		ease: "ease.inOut",
	});
});
</script>

<template>
	<div
		class="flex items-center justify-center transition border-black/10"
		:class="[
			size === 'large'
				? 'col-span-12 md:col-span-4 md:row-span-2 h-120 border-b md:border-b-0 md:border-r p-10 md:p-12'
				: 'col-span-6 sm:col-span-4 md:col-span-2 h-80 border-t border-l md:border-l-0 md:border-r p-6 md:p-7',
			isLastColumn && 'md:border-r-0',
		]">
		<div ref="iconRef">
			<slot />
		</div>
	</div>
</template>
