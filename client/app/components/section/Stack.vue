<script setup lang="ts">
import { stackItems, type TechTileItem } from "~/constants/stack";

const props = withDefaults(defineProps<{ items?: TechTileItem[] }>(), {
	items: () => [],
});

const text = `Vägen in i tech började med nyfikenhet kring hur idéer blir till fungerande digitala lösningar.
Genom arbete med både kod och design har jag utvecklat ett helhetsperspektiv på digitala produkter.
Det präglar hur jag bygger, tänker och samarbetar i varje projekt.`;

const resolvedTechTileItems = computed<TechTileItem[]>(() => {
	return props.items.length > 0 ? props.items : stackItems;
});

const largeTechTileItems = computed(() => resolvedTechTileItems.value.filter((item) => item.size === "large"));

const smallTechTileItems = computed(() => resolvedTechTileItems.value.filter((item) => item.size === "small"));
</script>

<template>
	<section
		id="tech"
		class="flex min-h-screen flex-col items-center justify-between space-y-12 px-3 py-48 md:px-6 lg:px-12 lg:py-64 xl:space-y-24">
		<p
			class="max-w-480 text-center text-lg leading-relaxed tracking-wide text-black/80 text-pretty md:text-2xl lg:text-3xl 2xl:text-5xl">
			{{ text }}
		</p>

		<div class="w-full overflow-hidden">
			<div class="grid grid-cols-12">
				<TechStackCard v-for="item in largeTechTileItems" :key="item.key" :size="item.size">
					<Icon :name="item.logo" />
				</TechStackCard>

				<TechStackCard v-for="item in smallTechTileItems" :key="item.key" :size="item.size">
					<Icon :name="item.logo" />
				</TechStackCard>
			</div>
		</div>
	</section>
</template>
