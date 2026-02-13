<script setup lang="ts">
import { useTextLinesReveal } from "~/composables/animation/useTextLinesReveal";

const props = withDefaults(
	defineProps<{
		text: string;
		wrapperClass?: string;
		lineClass?: string;
	}>(),
	{
		wrapperClass: "",
		lineClass: "block leading-relaxed tracking-wide text-pretty text-sm md:text-md lg:text-xl 2xl:text-3xl",
	},
);

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
	start: "top 115%",
	withClip: true,
});
</script>

<template>
	<div ref="containerRootElement" :class="wrapperClass">
		<span
			v-for="(line, index) in textLines"
			:key="line"
			:ref="(element) => registerLineElement(element, index)"
			:class="lineClass">
			{{ line }}
		</span>
	</div>
</template>
