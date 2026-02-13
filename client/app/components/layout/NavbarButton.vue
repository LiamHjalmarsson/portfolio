<script setup lang="ts">
import { useLayoutNavbarButtonAnimation } from "~/composables/layout/useLayoutNavbarButtonAnimation";

defineProps<{
	isMenuOpen: boolean;
}>();

const emit = defineEmits(["toggle", "animation-ready"]);

const burgerTopLineRef = ref<HTMLElement | null>(null);

const burgerCenterLineRef = ref<HTMLElement | null>(null);

const burgerBottomLineRef = ref<HTMLElement | null>(null);

const toggleButtonAnimation = useLayoutNavbarButtonAnimation({
	topLineElement: burgerTopLineRef,
	centerLineElement: burgerCenterLineRef,
	bottomLineElement: burgerBottomLineRef,
});

onMounted(() => {
	emit("animation-ready", toggleButtonAnimation);
});
</script>

<template>
	<button
		type="button"
		:aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
		class="fixed z-50 flex flex-col items-center justify-center space-y-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:h-20 md:w-20 top-4 right-10"
		@click="emit('toggle')">
		<span ref="burgerTopLineRef" class="block w-8 h-0.5 bg-white rounded-full origin-center" />
		<span ref="burgerCenterLineRef" class="block w-8 h-0.5 bg-white rounded-full origin-center" />
		<span ref="burgerBottomLineRef" class="block w-8 h-0.5 bg-white rounded-full origin-center" />
	</button>
</template>
