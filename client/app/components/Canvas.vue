<script lang="ts" setup>
import { SRGBColorSpace, ACESFilmicToneMapping } from "three";
const mounted = ref(false);

onMounted(() => {
	mounted.value = true;
});
</script>

<template>
	<figure class="transition-opacity duration-1000 delay-500 ease-in-out" :class="{ 'opacity-0': !mounted }">
		<TresCanvas
			:shadows="true"
			:output-color-space="SRGBColorSpace"
			:tone-mapping="ACESFilmicToneMapping"
			:tone-mapping-exposure="3">
			<OrbitControls />
			<TresPerspectiveCamera :fov="45" :position="[0, 0, 10]" :look-at="[0, 0, 0]" />

			<slot />
		</TresCanvas>
	</figure>
</template>
