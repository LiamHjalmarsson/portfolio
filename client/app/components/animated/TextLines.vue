<script setup lang="ts">
import { useTextLinesReveal } from "~/composables/animation/useTextLinesReveal";

const props = defineProps<{
	text: string;
}>();

const containerRootElement = ref<HTMLElement | null>(null);

const lineElements = ref<HTMLElement[]>([]);

const textLines = computed(() => props.text.split("\n").filter((line) => line.trim() !== ""));

function registerLineElement(element: Element | ComponentPublicInstance | null, index: number): void {
	if (!(element instanceof HTMLElement)) return;

	lineElements.value[index] = element;
}

useTextLinesReveal({
	animationRootElement: containerRootElement,
	lineElements,
	withScrollTrigger: true,
});
</script>

<template>
	<div ref="containerRootElement">
		<span
			v-for="(line, index) in textLines"
			:key="line"
			:ref="(element) => registerLineElement(element, index)"
			class="block text-sm leading-relaxed tracking-wide text-pretty md:text-md lg:text-xl 2xl:text-3xl">
			{{ line }}
		</span>
	</div>
</template>
