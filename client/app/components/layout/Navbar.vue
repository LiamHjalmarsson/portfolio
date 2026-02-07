<script setup lang="ts">
import gsap from "gsap";
import { socials } from "../../constants/socials";
import { links } from "../../constants/links";

const navRef = ref(null);

const contactRef = ref(null);

const burgerTopLineRef = ref(null);

const burgerCenterLineRef = ref(null);

const buegerBottomLineRef = ref(null);

const linksRef = ref<HTMLElement[]>([]);

const isOpen = ref(false);

const showBurger = ref(false);

const navTimeLineRef = shallowRef<gsap.core.Timeline | null>(null);

const iconTimeLineRef = shallowRef<gsap.core.Timeline | null>(null);

function toggleMenu(): void {
	if (isOpen.value) {
		navTimeLineRef.value?.reverse();

		iconTimeLineRef.value?.reverse();
	} else {
		navTimeLineRef.value?.play();

		iconTimeLineRef.value?.play();
	}

	isOpen.value = !isOpen.value;
}

function closeMenu(): void {
	if (!isOpen.value) return;

	navTimeLineRef.value?.reverse();

	iconTimeLineRef.value?.reverse();

	isOpen.value = false;
}

function handleEscapeKeyDown(event: KeyboardEvent): void {
	if (event.key !== "Escape") return;

	closeMenu();
}

let lastScrollY = 0;

function handleScroll(): void {
	const currentScrollY = window.scrollY;

	showBurger.value = currentScrollY <= lastScrollY || currentScrollY < 10;

	lastScrollY = currentScrollY;
}

onMounted(async () => {
	const navElement = navRef.value;

	const contactElement = contactRef.value;

	const burgerTopLineElement = burgerTopLineRef.value;

	const burgerCenterLineElement = burgerCenterLineRef.value;

	const burgerBottomLineElement = buegerBottomLineRef.value;

	if (
		!navElement ||
		!contactElement ||
		!burgerTopLineElement ||
		!burgerCenterLineElement ||
		!burgerBottomLineElement
	) {
		return;
	}

	lastScrollY = window.scrollY;

	window.addEventListener("scroll", handleScroll, { passive: true });

	window.addEventListener("keydown", handleEscapeKeyDown);

	const ctx = gsap.context(() => {
		gsap.set(navElement, { xPercent: 100 });

		gsap.set([...linksRef.value, contactElement], { autoAlpha: 0, x: -200 });

		navTimeLineRef.value = gsap
			.timeline({ paused: true })
			.to(navElement, { xPercent: 0, duration: 1, ease: "power3.out" })
			.to(
				linksRef.value,
				{
					autoAlpha: 1,
					x: 0,
					stagger: 0.25,
					duration: 0.5,
					ease: "power2.out",
				},
				"<+0.1",
			)
			.to(
				contactElement,
				{
					autoAlpha: 1,
					x: 0,
					duration: 0.5,
					ease: "power2.out",
				},
				"<+0.2",
			);

		iconTimeLineRef.value = gsap
			.timeline({ paused: true })
			.to(burgerTopLineElement, {
				rotate: 45,
				y: 6,
				duration: 0.3,
				ease: "power2.inOut",
			})
			.to(
				burgerCenterLineElement,
				{
					autoAlpha: 0,
					duration: 0.15,
					ease: "power2.inOut",
				},
				"<",
			)
			.to(
				burgerBottomLineElement,
				{
					rotate: -45,
					y: -6,
					duration: 0.3,
					ease: "power2.inOut",
				},
				"<",
			);
	}, navElement);

	onBeforeUnmount(() => {
		ctx.revert();
	});
});

onBeforeUnmount(() => {
	if (!import.meta.client) return;

	window.removeEventListener("scroll", handleScroll);

	window.removeEventListener("keydown", handleEscapeKeyDown);
});
</script>

<template>
	<nav
		ref="navRef"
		:aria-hidden="!isOpen"
		class="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 space-y-10 md:w-1/2 md:left-1/2">
		<ul class="flex flex-col space-y-4 text-5xl md:text-6xl lg:text-9xl">
			<li
				v-for="(link, index) in links"
				:key="link.to"
				:ref="
					(element) => {
						if (element) linksRef[index] = element as unknown as HTMLElement;
					}
				">
				<NuxtLink
					:to="link.to"
					class="cursor-pointer transition-all duration-300 hover:text-white"
					@click="closeMenu">
					{{ link.name }}
				</NuxtLink>
			</li>
		</ul>

		<div ref="contactRef" class="flex flex-col flex-wrap justify-between md:flex-row space-y-8">
			<div class="font-light">
				<p class="tracking-wider text-white/50">Email</p>
				<p class="text-xl tracking-widest lowercase text-pretty">liam.hjalmarssons@gmail.com</p>
			</div>

			<div class="font-light">
				<p class="tracking-wider text-white/50">Social Media</p>

				<div class="flex flex-col flew-wrap md:flex-row md:space-x-2 max-md:space-y-2">
					<NuxtLink
						v-for="social in socials"
						:key="social.name"
						:to="social.href"
						class="text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300">
						{{ social.name }}
					</NuxtLink>
				</div>
			</div>
		</div>
	</nav>

	<button
		type="button"
		aria-label="toggle menu"
		@click="toggleMenu"
		class="fixed z-50 flex flex-col items-center justify-center space-y-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:h-20 md:w-20 top-4 right-10">
		<span ref="burgerTopLineRef" class="block w-8 h-0.5 bg-white rounded-full origin-center" />
		<span ref="burgerCenterLineRef" class="block w-8 h-0.5 bg-white rounded-full origin-center" />
		<span ref="buegerBottomLineRef" class="block w-8 h-0.5 bg-white rounded-full origin-center" />
	</button>
</template>
