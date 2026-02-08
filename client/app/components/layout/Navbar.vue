<script setup lang="ts">
import type { NavbarMenuAnimation } from "~/composable/layout/useLayoutNavbarMenuAnimation";

const isMenuOpen = ref(false);

const shouldShowMenuToggleButton = ref(true);

let lastKnownScrollY = 0;

const menuAnimation = shallowRef<NavbarMenuAnimation | null>(null);

function openMenu() {
	if (!menuAnimation.value) return;

	menuAnimation.value.play();

	isMenuOpen.value = true;
}

function closeMenu() {
	if (!isMenuOpen.value) return;

	if (!menuAnimation.value) return;

	menuAnimation.value.reverse();

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

function registerMenuAnimation(animation: NavbarMenuAnimation) {
	menuAnimation.value = animation;
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
	<LayoutNavbarMenu :isMenuOpen="isMenuOpen" @requestClose="closeMenu" @animationReady="registerMenuAnimation" />

	<LayoutNavbarButton :isMenuOpen="isMenuOpen" @toggle="toggleMenu" />
</template>
