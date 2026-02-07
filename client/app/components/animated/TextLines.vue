<script setup lang="ts">
import { ref, computed } from "vue";
import gsap from "gsap";

const props = defineProps<{
	text: string;
}>();

const containerRef = ref<HTMLElement | null>(null);

const lineRefs = ref<HTMLElement[]>([]);

const lines = computed(() => props.text.split("\n").filter((line) => line.trim() !== ""));

onMounted(async () => {
	if (!import.meta.client) return;

	await nextTick();

	if (lineRefs.value.length > 0) {
		gsap.from(lineRefs.value, {
			y: 100,
			opacity: 0,
			duration: 1,
			stagger: 0.3,
			ease: "back.out",
			scrollTrigger: {
				trigger: containerRef.value,
			},
		});
	}
});
</script>

<template>
	<div ref="containerRef">
		<span
			v-for="(line, index) in lines"
			:key="line"
			:ref="
				(element) => {
					if (element) lineRefs[index] = element as HTMLElement;
				}
			"
			class="block leading-relaxed tracking-wide text-2xl lg:text-3xl text-pretty">
			{{ line }}
		</span>
	</div>
</template>
