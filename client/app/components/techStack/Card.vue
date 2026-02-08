<script setup lang="ts">
import gsap from "gsap";
import type { TechTileSize } from "~/constants/stack";

defineProps<{
	size: TechTileSize;
}>();

const cardContentElement = ref<HTMLElement | null>(null);

let gsapContext: gsap.Context | null = null;

onMounted(async () => {
	if (!import.meta.client) return;

	await nextTick();

	const content = cardContentElement.value;

	if (!content) return;

	gsapContext = gsap.context(() => {
		gsap.from(content, {
			opacity: 0,
			duration: 0.8,
			ease: "power2.inOut",
			scrollTrigger: {
				trigger: content,
				start: "top 80%",
			},
		});
	}, content);
});

onBeforeUnmount(() => {
	gsapContext?.revert();

	gsapContext = null;
});
</script>

<template>
	<div
		class="group flex items-center justify-center border-r border-b border-black/5 transition"
		:class="[
			size === 'large'
				? 'col-span-4 row-span-2 h-40 p-10 md:p-12 lg:h-52 2xl:h-96 last:border-b-0 nth-3:border-r-0'
				: 'col-span-4 h-40 p-6 sm:col-span-2 md:p-7 lg:h-52 2xl:h-80 max-sm:nth-6:border-r-0 last:border-r-0',
		]">
		<div
			ref="cardContentElement"
			:class="[size === 'large' ? 'text-6xl lg:text-7xl' : 'text-5xl lg:text-6xl', 'font-bold']">
			<slot />
		</div>
	</div>
</template>
