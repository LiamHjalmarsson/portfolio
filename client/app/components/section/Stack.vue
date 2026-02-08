<script setup lang="ts">
import { stackItems, type TechTileItem } from "~/constants/stack";

const props = withDefaults(defineProps<{ items?: TechTileItem[] }>(), { items: () => [] });

const text = `Jag började min resa inom tech för inte så länge sedan. 
Under min utbildning fick jag upp ögonen för både utveckling och design och hittade snabbt en stark passion för att skapa digitala saker.
Sedan dess har jag fortsatt att utforska, lära mig och bygga, med fokus på att kombinera funktion, struktur och estetik i det jag gör.`;

const resolvedItems = computed<TechTileItem[]>(() => (props.items.length > 0 ? props.items : stackItems));

const largeItems = computed(() => resolvedItems.value.filter((item) => item.size === "large"));

const smallItems = computed(() => resolvedItems.value.filter((item) => item.size === "small"));
</script>

<template>
	<section
		class="flex flex-col min-h-screen items-center justify-between space-y-12 xl:space-y-24 py-48 lg:py-64 px-3 md:px-6 lg:px-12">
		<p
			class="block leading-relaxed tracking-wide text-lg md:text-2xl lg:text-3xl 2xl:text-5xl text-pretty text-center text-black/80 max-w-480">
			{{ text }}
		</p>

		<div class="w-full">
			<div class="overflow-hidden">
				<div class="grid grid-cols-12">
					<TechStackCard
						v-for="(item, index) in largeItems"
						:key="item.key"
						:size="item.size"
						:is-last-column="(index + 1) % 3 === 0"
						data-tech-card="large">
						<div class="font-black text-xs md:text-sm xl:text-xl group:hover:text-white duration-300">
							{{ item.label }}
						</div>
					</TechStackCard>

					<TechStackCard
						v-for="(item, index) in smallItems"
						:key="item.key"
						:size="item.size"
						:is-last-column="(index + 1) % 6 === 0"
						data-tech-card="small">
						<div class="font-black text-xs md:text-sm xl:text-xl group:hover:text-white duration-300">
							{{ item.label }}
						</div>
					</TechStackCard>
				</div>
			</div>
		</div>
	</section>
</template>
