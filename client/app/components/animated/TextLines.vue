<script setup lang="ts">
import gsap from "gsap";

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

let gsapContext: gsap.Context | null = null;

onMounted(async () => {
	if (!import.meta.client) return;

	await nextTick();

	const containerElement = containerRootElement.value;
	if (!containerElement) return;

	if (lineElements.value.length === 0) return;

	gsapContext = gsap.context(() => {
		gsap.set(lineElements.value, {
			opacity: 0,
			y: 24,
			rotateX: -35,
			transformPerspective: 800,
			transformOrigin: "50% 100%",
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: containerElement,
				start: "top 95%",
			},
		})
			.to(lineElements.value, {
				opacity: 1,
				y: 0,
				rotateX: 0,
				duration: 1,
				stagger: 0.3,
				ease: "power3.out",
				clearProps: "transform",
			})
			.to(
				lineElements.value,
				{
					letterSpacing: "0.04em",
					duration: 1,
					stagger: 0.3,
					ease: "power2.out",
				},
				"<+0.05",
			);
	}, containerElement);
});

onBeforeUnmount(() => {
	gsapContext?.revert();
	gsapContext = null;
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
