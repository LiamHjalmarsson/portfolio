<script setup lang="ts">
import type { NavbarToggleButtonAnimation } from "~/composables/layout/useLayoutNavbarButtonAnimation";
import type { NavbarMenuAnimation } from "~/composables/layout/useLayoutNavbarMenuAnimation";

const isMenuOpen = ref(false);

const shouldShowMenuToggleButton = ref(true);

const menuAnimation = shallowRef<NavbarMenuAnimation | null>(null);

const toggleButtonAnimation = shallowRef<NavbarToggleButtonAnimation | null>(null);

let lastKnownScrollY = 0;

function registerToggleButtonAnimation(animation: NavbarToggleButtonAnimation) {
	toggleButtonAnimation.value = animation;
}

function registerMenuAnimation(animation: NavbarMenuAnimation) {
	menuAnimation.value = animation;
}

function openMenu() {
	if (!menuAnimation.value) return;

	menuAnimation.value.play();

	toggleButtonAnimation.value?.play();

	isMenuOpen.value = true;
}

function closeMenu() {
	if (!isMenuOpen.value || !menuAnimation.value) return;

	menuAnimation.value?.reverse();

	toggleButtonAnimation.value?.reverse();

	isMenuOpen.value = false;
}

function toggleMenu() {
	if (isMenuOpen.value) {
		closeMenu();

		return;
	}

	openMenu();
}

function handleEscapeKeyDown(event: KeyboardEvent) {
	if (event.key !== "Escape") return;

	closeMenu();
}

function handleWindowScroll() {
	const currentScrollY = window.scrollY;

	shouldShowMenuToggleButton.value = currentScrollY <= lastKnownScrollY || currentScrollY < 10;

	lastKnownScrollY = currentScrollY;
}

onMounted(() => {
	if (!import.meta.client) return;

	lastKnownScrollY = window.scrollY;

	window.addEventListener("scroll", handleWindowScroll, { passive: true });

	window.addEventListener("keydown", handleEscapeKeyDown);
});

onBeforeUnmount(() => {
	if (!import.meta.client) return;

	window.removeEventListener("scroll", handleWindowScroll);

	window.removeEventListener("keydown", handleEscapeKeyDown);
});
</script>

<template>
	<LayoutNavbarMenu :isMenuOpen="isMenuOpen" @request-close="closeMenu" @animation-ready="registerMenuAnimation" />

	<LayoutNavbarButton
		:isMenuOpen="isMenuOpen"
		@toggle="toggleMenu"
		@animation-ready="registerToggleButtonAnimation" />
</template>
