<script setup lang="ts">
import { useParagraphReveal } from "~/composables/animation/useParagraphReveal";
import { stackItems, type TechTileItem } from "~/constants/stack";

const props = withDefaults(defineProps<{ items?: TechTileItem[] }>(), {
	items: () => [],
});

const text = `Genom arbete med både kod och design har jag utvecklat ett helhetsperspektiv på digitala produkter. Det har jag med mig när jag bygger och tänker.`;

const resolvedItems = computed<TechTileItem[]>(() => (props.items.length > 0 ? props.items : stackItems));

const largeTechItems = computed(() => resolvedItems.value.filter((item) => item.size === "large"));

const smallTechItems = computed(() => resolvedItems.value.filter((item) => item.size === "small"));

const orderedItems = computed(() => [...largeTechItems.value, ...smallTechItems.value]);

const textWrapRef = ref<HTMLElement | null>(null);

const textRef = ref<HTMLElement | null>(null);

useParagraphReveal({
	animationRootElement: textWrapRef,
	textElement: textRef,
	withScrollTrigger: true,
	start: "top 85%",
	FromY: 200,
	ease: "power3.out",
});
</script>

<template>
	<section
		id="tech"
		class="flex min-h-screen flex-col items-center justify-between space-y-12 px-3 py-48 md:px-6 lg:px-12 lg:py-64 xl:space-y-24">
		<div ref="textWrapRef" class="max-w-480">
			<p
				ref="textRef"
				class="text-center text-lg leading-relaxed tracking-wide text-black/80 text-pretty md:text-2xl lg:text-3xl 2xl:text-5xl">
				{{ text }}
			</p>
		</div>

		<div class="w-full overflow-hidden">
			<div class="grid grid-cols-12">
				<TechStackCard
					v-for="(item, index) in orderedItems"
					:key="item.key"
					:index="index"
					:size="item.size"
					:logo="item.logo" />
			</div>
		</div>
	</section>
</template>
