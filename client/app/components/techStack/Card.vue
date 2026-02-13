<script setup lang="ts">
import type { TechTileSize } from "~/constants/stack";

defineProps<{
	size: TechTileSize;
	logo: string;
	index: number;
}>();

const iconWrapRef = ref<HTMLElement | null>(null);
</script>

<template>
	<div
		class="group flex items-center justify-center border-r border-b border-black/5 hover:bg-black transition duration-300"
		:class="[
			size === 'large'
				? 'col-span-4 row-span-2 h-40 p-10 md:p-12 lg:h-52 2xl:h-96 last:border-b-0 nth-3:border-r-0'
				: 'col-span-4 h-40 p-6 sm:col-span-2 md:p-7 lg:h-52 2xl:h-80 max-sm:nth-6:border-r-0 last:border-r-0',
		]">
		<span
			ref="iconWrapRef"
			:class="[
				size === 'large' ? 'text-6xl lg:text-7xl' : 'text-5xl lg:text-6xl',
				'font-bold group-hover:text-white transition duration-300',
			]">
			<Icon :name="logo" />
		</span>
	</div>
</template>
