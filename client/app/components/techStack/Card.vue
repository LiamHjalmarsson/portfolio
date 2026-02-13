<script setup lang="ts">
import gsap from "gsap";
import type { TechTileSize } from "~/constants/stack";

defineProps<{
	size: TechTileSize;
}>();

const contentRef = ref<HTMLElement | null>(null);

let context: gsap.Context | null = null;

let tween: gsap.core.Tween | null = null;

onMounted(async () => {
	await nextTick();

	const content = contentRef.value;

	if (!content) return;

	context?.revert();

	context = null;

	context = gsap.context(() => {
		tween?.kill();

		tween = null;

		tween = gsap.from(content, {
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
	tween?.kill();

	tween = null;

	context?.revert();

	context = null;
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
			ref="contentRef"
			:class="[size === 'large' ? 'text-6xl lg:text-7xl' : 'text-5xl lg:text-6xl', 'font-bold']">
			<slot />
		</div>
	</div>
</template>
