<script setup lang="ts">
import { useLayoutNavbarMenuAnimation } from "~/composable/layout/useLayoutNavbarMenuAnimation";
import { links } from "~/constants/links";
import { socials } from "~/constants/socials";

defineProps<{
	isMenuOpen: boolean;
}>();

const menuRootElement = ref<HTMLElement | null>(null);

const contactSectionElement = ref<HTMLElement | null>(null);

const menuLinkElements = ref<HTMLElement[]>([]);

const emit = defineEmits(["request-close", "animation-ready"]);

function registerMenuLinkElement(element: Element | ComponentPublicInstance | null, index: number) {
	if (!(element instanceof HTMLElement)) return;

	menuLinkElements.value[index] = element;
}

onMounted(() => {
	if (!import.meta.client) return;

	const animation = useLayoutNavbarMenuAnimation({
		menuRootElement,
		menuLinkElements,
		contactSectionElement,
	});

	emit("animation-ready", animation);
});
</script>

<template>
	<nav
		ref="menuRootElement"
		:aria-hidden="!isMenuOpen"
		class="fixed z-50 flex h-full w-full flex-col justify-between bg-black px-10 py-28 uppercase text-white/80 md:left-1/2 md:w-1/2">
		<ul class="flex flex-col space-y-4 overflow-hidden text-5xl md:text-6xl lg:text-9xl">
			<li
				v-for="(link, index) in links"
				:key="link.to"
				:ref="(element) => registerMenuLinkElement(element, index)">
				<NuxtLink
					:to="link.to"
					class="cursor-pointer transition-all duration-300 hover:text-white"
					@click="emit('request-close')">
					{{ link.name }}
				</NuxtLink>
			</li>
		</ul>

		<div ref="contactSectionElement" class="flex flex-col flex-wrap justify-between space-y-8 md:flex-row">
			<div class="font-light">
				<p class="tracking-wider text-white/50">Email</p>
				<p class="text-pretty text-xl tracking-widest lowercase">liam.hjalmarssons@gmail.com</p>
			</div>

			<div class="font-light">
				<p class="tracking-wider text-white/50">Social Media</p>

				<div class="flex flex-col md:flex-row md:space-x-2 max-md:space-y-2">
					<NuxtLink
						v-for="social in socials"
						:key="social.name"
						:to="social.href"
						class="text-sm leading-loose tracking-widest uppercase transition-colors duration-300 hover:text-white">
						{{ social.name }}
					</NuxtLink>
				</div>
			</div>
		</div>
	</nav>
</template>
